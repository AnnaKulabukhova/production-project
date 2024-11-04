import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import type { Article } from '../../model/types/article';
import { ArticlesViews } from '../../model/consts/articleConsts';
import AvatarIcon from '@/shared/assets/tests/avatarForStorybook.jpg'
import ArticleIcon from '@/shared/assets/tests/articleImageTest.png'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const articles = {
  id: '1',
  title: 'Javascript news ',
  subtitle: 'Что нового в JS за 2022 год?',
  img: ArticleIcon,
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'Petya',
    avatar: AvatarIcon,
  },
  type: ['IT', 'Economics', 'Science', 'Science', 'Science'],
  blocks: [
    {
      id: '1',
      type: 'text',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '3',
      type: 'code',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: 'text',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
} as Article;

const meta: Meta<typeof ArticleList> = {
  title: 'Entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const ListBig: Story = {
  args: {
    isLoading: false,
    view: ArticlesViews.Big,
    articles: new Array(3).fill(0).map((item, index) => ({ ...articles, id: String(index) })),
  },
};
export const ListSmall: Story = {
  args: {
    isLoading: false,
    view: ArticlesViews.Small,
    articles: new Array(9).fill(0).map((item, index) => ({ ...articles, id: String(index) })),
  },
};
export const LoadingBig: Story = {
  args: {
    isLoading: true,
    view: ArticlesViews.Big,
    articles: [],
  },
};
export const LoadingSmall: Story = {
  args: {
    isLoading: true,
    view: ArticlesViews.Small,
    articles: [],
  },
};
export const ListBigRedesigned: Story = {
  args: {
    isLoading: false,
    view: ArticlesViews.Big,
    articles: new Array(3).fill(0).map((item, index) => ({ ...articles, id: String(index) })),
  },
  decorators: [NewDesignDecorator]
};
export const ListSmallRedesigned: Story = {
  args: {
    isLoading: false,
    view: ArticlesViews.Small,
    articles: new Array(9).fill(0).map((item, index) => ({ ...articles, id: String(index) })),
  },
  decorators: [NewDesignDecorator]
};
export const LoadingBigRedesigned: Story = {
  args: {
    isLoading: true,
    view: ArticlesViews.Big,
    articles: [],
  },
  decorators: [NewDesignDecorator]
};
export const LoadingSmallRedesigned: Story = {
  args: {
    isLoading: true,
    view: ArticlesViews.Small,
    articles: [],
  },
  decorators: [NewDesignDecorator]
};
