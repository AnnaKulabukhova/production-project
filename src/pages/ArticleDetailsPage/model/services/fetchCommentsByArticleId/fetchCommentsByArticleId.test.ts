import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';

const comments = [
  {
    id: '1',
    text: '"some comment',
    articleId: '1',
    userId: '1',
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
  },
  {
    id: '3',
    text: 'some comment 3',
    articleId: '1',
    userId: '2',
  },
];

describe('fetchCommentsByArticleid.test', () => {
  test('success get data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comments);
  });

  test('error get data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
