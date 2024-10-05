import type { StateSchema } from '@/app/providers/StoreProvider';
import { getCanEditArticle } from './article';

describe('articleDetails.test', () => {
  test('success return id', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
      articleDetails: {
        data: {
          user: {
            id: '1',
            username: 'admin',
          },
          id: '12',
          title: 'title',
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(true);
  });
  test('unsuccessful return id', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
      articleDetails: {
        data: {
          user: {
            id: '2',
            username: 'admin',
          },
          id: '12',
          title: 'title',
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
  test('without user id in article page', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
});
