// Переключение между фичами для разных пользователей

import { Project, SyntaxKind } from 'ts-morph';
import type { Node } from 'ts-morph';

// Для передачи названия в сам скрипт
const removeFeaturesName = process.argv[2] // ex: isArticleRatingEnabled
const featureState = process.argv[3] // ex: on/off

if (!removeFeaturesName) {
  throw new Error('Укажите название фича-флага')
}
if (!featureState) {
  throw new Error('Укажите состояние фичи (on или off)')
}
if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное название фичи (on или off)')
}

const project = new Project({});

// Добавление исходных файлов, на основе которых будут созданы соответствующие объекты каталогов.
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// Получить все исходные файлы
const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let isToggleFeatures = false

  node.forEachChild(child => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true
    }
  })
  return isToggleFeatures
}

files?.forEach((sourceFile) => {
  // для обхождения всех потомков forEachDescendant в каждом файле
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      // getFirstDescendantByKind - получение первого потомка по типу (объект с property)
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)
      if (!objectOptions) return

      const onFunctionProperty = objectOptions.getProperty('on') // ex: on: () => <ArticleRating articleId={id}></ArticleRating>
      const offFunctionProperty = objectOptions.getProperty('off')
      const featureNameProperty = objectOptions.getProperty('name') // ex: name: 'isArticleRatingEnabled'

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction) // ex: () => <ArticleRating articleId={id}></ArticleRating>
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
      const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1)

      if (featureName !== removeFeaturesName) return

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
      }
    }
  })
});

project.save();
