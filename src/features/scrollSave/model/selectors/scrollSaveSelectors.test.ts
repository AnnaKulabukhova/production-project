import type { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollSaveBypath } from './scrollSaveSelectors';

describe('scrollSaveSelectors.test', () => {
  test('return position scroll', () => {
    const state: DeepPartial<StateSchema> = {
      scrollSave: {
        scroll: {
          '/articles': 75,
        },
      },
    };
    expect(getScrollSaveBypath(state as StateSchema, '/articles')).toEqual(75);
  });

  test('successful work with empty scroll', () => {
    const state: DeepPartial<StateSchema> = {
      scrollSave: {
        scroll: {},
      },
    };
    expect(getScrollSaveBypath(state as StateSchema, '/articles')).toEqual(0);
  });
});
