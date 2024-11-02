import type { ArticleType } from '@/entities/Article';
import type { ArticleBlock } from '@/entities/Article/model/types/article';
import { rtkApi } from '@/shared/api/rtkApi';

interface CreateArticleType {
  userId: string;
  title: string;
  subtitle?: string;
  img?: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}


const createArticleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createArticle: build.mutation<void, CreateArticleType>({
      query: (arg) => ({
        url: '/articles',
        method: 'POST',
        body: arg
      }),
    }),
  }),
});

export const useCreateArticle = createArticleApi.useCreateArticleMutation;
