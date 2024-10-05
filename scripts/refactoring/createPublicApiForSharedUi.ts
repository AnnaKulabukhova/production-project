// Создание  public api в слое Shared
import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

// Добавление исходных файлов, на основе которых будут созданы соответствующие объекты каталогов.
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// Получить все исходные файлы
const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
// Получить все ui компоненты
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
  const layers = ['app', 'widgets', 'features', 'entities', 'shared', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);
  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`;
    // создание index.ts
    const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
    file.save();
  }
});

files?.forEach((sourceFile) => {
  // Импорт исходного модуля
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    // Получение значения модуля
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');
    const segment = valueWithoutAlias.split('/');
    const isSharedLayer = segment[0] === 'shared';
    const isUiSlice = segment[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
