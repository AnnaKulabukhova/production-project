import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import type { Article } from '@/entities/Article';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';

const article: Article = {
  id: '1',
  blocks: [],
  createdAt: '',
  img: '',
  subtitle: 'fsd',
  title: 'Article',
  type: [],
  user: { id: '1', username: 'user' },
  views: 456,
};

const articles = [
  {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',

    type: ['IT'],
    blocks: [
      {
        id: '2',
        type: 'image',
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '3',
        type: 'code',
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },

      {
        id: '8',
        type: 'image',
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '9',
        type: 'text',
        title: 'Заголовок этого блока',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://krymmedia.com/wp-content/uploads/2022/06/Python-Symbol.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [
      {
        id: '3',
        type: 'code',
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },

      {
        id: '8',
        type: 'image',
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '9',
        type: 'text',
        title: 'Заголовок этого блока',
        paragraphs: ['fsgf'],
      },
    ],
  },
  {
    id: '3',
    title: 'Kotlin news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://avatao.com/media/2020/08/1_fnbqF0xNVwINs_RkygkX1g.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [
      {
        id: '5',
        type: 'text',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения',
        ],
      },
      {
        id: '3',
        type: 'code',
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
        id: '8',
        type: 'image',
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
    ],
  },
] as Article[];

const meta: Meta<typeof ArticlesPage> = {
  title: 'Pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?sort=createAt&order=asc&search=&type=all`,
        method: 'GET',
        status: 200,
        response: article
      },
    ],
  },
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
};
