import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/article'
import { ArticleBlockType, ArticleType } from '../consts/articleConsts'
import { articleDetailsReducer } from './articleDetailsSlice'
import { type ArticleDetailsSchema } from '../types/ArticleDetailsSchema'

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1', username: 'Petya', avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg'
  },
  blocks: [
    {
      id: '4',
      type: ArticleBlockType.Code,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '2',
      type: ArticleBlockType.Image,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '9',
      type: ArticleBlockType.Text,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
      ]
    }
  ]
}

describe('articleDetailsSlice', () => {
  test('test  update profile service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false
    }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending('', '')
    )).toEqual({ isLoading: true })
  })

  test('test  update profile service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      data: article
    }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(article, '', '')
    )).toEqual({ isLoading: false, data: article })
  })
})
