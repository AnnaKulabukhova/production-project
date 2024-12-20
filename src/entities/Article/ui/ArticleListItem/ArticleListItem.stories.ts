import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import type { Article } from '@/entities/Article/model/types/article';
import { ArticlesViews } from '@/entities/Article/model/consts/articleConsts';
import AvatarIcon from '@/shared/assets/tests/avatarForStorybook.jpg'
import ArticleIcon from '@/shared/assets/tests/articleImageTest.png'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const articles: Article = {
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
  ],
} as Article;

const meta: Meta<typeof ArticleListItem> = {
  title: 'Entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Big: Story = {
  args: {
    view: ArticlesViews.Big,
    article: articles,
  },
};
export const Small: Story = {
  args: {
    view: ArticlesViews.Small,
    article: articles,
  },
};
export const BigRedesigned: Story = {
  args: {
    view: ArticlesViews.Big,
    article: articles,
  },
  decorators: [NewDesignDecorator]
};
export const SmallRedesigned: Story = {
  args: {
    view: ArticlesViews.Small,
    article: articles,
  },
  decorators: [NewDesignDecorator]
};
