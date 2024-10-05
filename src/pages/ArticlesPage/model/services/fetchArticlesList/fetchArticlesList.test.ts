import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import type { Article } from '@/entities/Article';
import axios from 'axios';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Dispatch } from '@reduxjs/toolkit';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const articles: Article[] = [
  {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: '',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    user: {
      id: '1',
      username: 'Petya',
    },
    blocks: [],
  },
  {
    id: '2',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: '',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    user: {
      id: '2',
      username: 'Vasya',
    },
    blocks: [],
  },
];

describe('fetchArticlesList', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let extra: { api: typeof mockedAxios };

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(
      () =>
        ({
          articlesPage: {},
        }) as StateSchema,
    );

    extra = { api: mockedAxios };
  });

  test('success', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: articles }));
    const action = fetchArticlesList({ replace: false });
    const result = await action(dispatch, getState, extra);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  test('fetchArticlesList not called', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = fetchArticlesList({ replace: false });
    const result = await action(dispatch, getState, extra);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
