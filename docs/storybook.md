## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

В storybook используются следующие декораторы:  
+ ThemeDecorator - для изменения темы
+ SuspenseDecorator -  для оборачивания компонента Storybook в React-компонент Suspense
+ StoreProviderDecorator - для добавления состояния и работы асинхронными редьюсерами  с Redux
+ RouterDecorator - для оборачивания компонента Storybook в BrowserRouter из библиотеки react-router-dom   
+ PositionDecorator - для отцентровки компонента Storybook 
+ NewDesignDecorator - для использования обновленной версии проекта с подключением новых стилей  
+ FeaturesFlagsDecorator - для переключения фичей в проекте 

Запустить сторибук можно командой: `npm run storybook`

Пример:

```typescript jsx
const meta: Meta<typeof Card> = {
  title: 'Shared/CardRedesign',
  component: Card,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
};

export const Dark: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Blue: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
```