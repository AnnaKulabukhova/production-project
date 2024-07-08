import { User } from "entities/User"

export enum ArticleBlockType {
  Text = 'text',
  Image = 'image',
  Code = 'code'
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.Text
  title?: string
  paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.Image
  src: string
  title: string
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.Code
  code: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export enum ArticleType {
  IT = 'IT',
  Science = 'Science',
  Economics = 'Economics'
}

export enum ArticlesViews {
  Big = 'big',
  Small = 'small'
}

export interface Article {
  id: string,
  user: User
  title: string,
  subtitle: string,
  img: string
  views: number,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlock[]
}