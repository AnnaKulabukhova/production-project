import type { ArticleType } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';
import { type ArticleBlocks } from '../model/types/createArticleTypes';

interface CreateArticleType {
  userId: string;
  title: string;
  subtitle?: string;
  img?: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlocks;
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
