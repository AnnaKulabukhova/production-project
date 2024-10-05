// автоматизированное добавление алиасов

import { Project } from 'ts-morph';

const project = new Project({});

// Добавление исходных файлов, на основе которых будут созданы соответствующие объекты каталогов.
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// Получить все исходные файлы
const files = project.getSourceFiles();

const layers = ['app', 'widgets', 'features', 'entities', 'shared', 'pages'];
const isAbsolute = (value: string) => {
  return layers.some((layer) => value.startsWith(layer));
};

files?.forEach((sourceFile) => {
  // Импорт исходного модуля
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    // Получение значения модуля
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
