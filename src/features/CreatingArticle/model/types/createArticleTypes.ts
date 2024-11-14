import { type ArticleCodeBlock, type ArticleImageBlock, type ArticleTextBlock } from "@/entities/Article/model/types/article";

export type ArticleBlocks = Array<ArticleImageBlock | ArticleCodeBlock | ArticleTextBlock>
