import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleRecommendations } from './fetchArticleRecomendations';
import type { Article } from '@/entities/Article';

const articles: Article[] = [
  {
    blocks: [],
    createdAt: '',
    id: '1',
    img: '',
    subtitle: 'subtitle article1',
    title: 'title 1',
    type: [],
    views: 11,
    user: { id: '1', username: 'user' },
  },
  {
    blocks: [],
    createdAt: '',
    id: '2',
    img: '',
    subtitle: 'subtitle article 2',
    title: 'title 2',
    type: [],
    views: 31,
    user: { id: '2', username: 'admin' },
  },
];

describe('fetchArticleRecommendations.test', () => {
  test('success get data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  test('error get data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
