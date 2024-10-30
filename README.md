## Запуск проекта

npm install - установка зависимостей  
npm run start:dev или npm run start:dev:vite - запуск frontend проекта одновременно с сервером

---

## Скрипты

`npm run start` - Запуск frontend проекта на webpack dev server  
`npm run start:vite` - Запуск frontend проекта на vite   
`npm run start:dev` - Запуск frontend проекта на webpack dev server одновременно с backend сервером  
`npm run start:dev:vite `- Запуск frontend проекта на vite одновременно с backend сервером  
`npm run start:dev:server` -  Запуск backend сервера  
`npm run build:prod` - Сборка в prod режиме  
`npm run build:dev` - Сборка в dev режиме  
`npm run lint:ts` - Проверка ts файлов линтером  
`npm run lint:ts:fix` - Исправление ts файлов линтером  
`npm run lint:scss` -  Проверка scss файлов style линтером  
`npm run lint:scss:fix` - Исправление scss файлов style линтером  
`npm run test:unit` - Запуск unit тестов с jest  
`npm run test:e2e` -  Запуск e2e тестов с cypress  
`npm run storybook` - Запуск storybook  
`npm run build-storybook` -  Сборка storybook билда  
`npm run chromatic` -  Запуск snapshot тестов     
`npm run chromatic:success` - Подтверждение измененных и новых снимков  
`npm run prepare` - Прекоммит хуки   
`npm run prettier` - Запуск prettier  
`npm run remove-feature` -  Удаление ненужных фичей (необходимо передать название фичи и состояние on/off)

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced Design

Ссылка на документацию  [Feature-Sliced Design](https://feature-sliced.design/)

---

## Переводы

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Snapshot тесты с chromatic `npm run chromatic`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг


В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой: `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](src\shared\lib\components\DynamicModuleLoading\DynamicModuleLoading.tsx)

----

### Работа с feature-flag

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями 

{
   name: название фича-флага, 
   on: функция, которая отработает после Включения фичи 
   of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента
1. Название удаляемого фича-флага
2. Состояние (on\off)

----

## Сущности (entities)

- [Article](/src/entities/Article/README.md)
- [Comment](/src/entities/Comment/README.md)
- [Country](/src/entities/Country/README.md)
- [Currency](/src/entities/Currency/README.md)
- [Notification](/src/entities/Notification/README.md)
- [Profile](/src/entities/Profile/README.md)
- [Rating](/src/entities/Rating/README.md)
- [User](/src/entities/User/README.md)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm/README.md)
- [ArticlePageGreeting](/src/features/ArticlePageGreeting/README.md)
- [articleRating](/src/features/articleRating/README.md)
- [articleRecommendationsList](/src/features/articleRecommendationsList/README.md)
- [ArticleSortSelector](/src/features/ArticleSortSelector/README.md)
- [ArticlesTypeTabs](/src/features/ArticlesTypeTabs/README.md)
- [ArticlesViewSelector](/src/features/ArticlesViewSelector/README.md)
- [AuthByUsername](/src/features/AuthByUsername/README.md)
- [avatarDropdown](/src/features/avatarDropdown/README.md)
- [editableProfileCard](/src/features/editableProfileCard/README.md)
- [LangSwitcher](/src/features/LangSwitcher/README.md)
- [notificationButton](/src/features/notificationButton/README.md)
- [profileRating](/src/features/profileRating/README.md)
- [ThemeSwitcher](/src/features/ThemeSwitcher/README.md)
- [ScrollSave](/src/features/scrollSave/README.md)
- [ScrollToTopButton](/src/features/ScrollToTopButton/README.md)
- [UiDesignSwitcher](/src/features/UiDesignSwitcher/README.md)
