import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import type { Article } from '@/entities/Article/model/types/article';
import { ArticleBlockType, ArticleType } from '@/entities/Article/model/consts/articleConsts';
import AvatarIcon from '@/shared/assets/tests/avatarForStorybook.jpg'
import ArticleIcon from '@/shared/assets/tests/articleImageTest.png'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: ArticleIcon,
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Petya',
    avatar: AvatarIcon,
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.Text,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.Code,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '8',
      type: ArticleBlockType.Image,
      src: ArticleIcon,
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '9',
      type: ArticleBlockType.Text,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  ],
};

const meta: Meta<typeof ArticleDetails> = {
  title: 'Entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { data: article } })],
};

export const Loading: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { isLoading: true } })],
};

export const Error: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { error: 'error' } })],
};

export const PrimaryRedesigned: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { data: article } }), NewDesignDecorator],
};

export const LoadingRedesigned: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { isLoading: true } }), NewDesignDecorator],
};

export const ErrorRedesigned: Story = {
  decorators: [StoreProviderDecorator({ articleDetails: { error: 'error' } }), NewDesignDecorator],
};
