import { ArticleBlockType } from "../../model/consts/articleConsts";
import type { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from './ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock, index: number) => {
  switch (block.type) {
    case ArticleBlockType.Text:
      return <ArticleTextBlockComponent key={index} className={classes.block} block={block} />;
    case ArticleBlockType.Code:
      return <ArticleCodeBlockComponent key={index} className={classes.block} block={block} />;
    case ArticleBlockType.Image:
      return <ArticleImageBlockComponent key={index} block={block} className={classes.block} />;
    default:
      return null;
  }
}