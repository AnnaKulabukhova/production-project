import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      // initialState
      articlesPage: {
        entities: {},
        hasMore: true,
        ids: [],
        isLoading: false,
        page: 2,
        limit: 5,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.setPage(3));
    expect(fetchArticlesList).toHaveBeenCalled();
  });
  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        entities: {},
        hasMore: false,
        ids: [],
        isLoading: false,
        page: 2,
        limit: 5,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetchArticlesList loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        entities: {},
        hasMore: true,
        ids: [],
        isLoading: true,
        page: 2,
        limit: 5,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
