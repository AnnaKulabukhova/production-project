import type { ScrollSaveSchema } from '../types/scrollSave'
import { scrollSaveActions, scrollSavesReducer } from './scrollSaveSlice'

describe('scrollSaveSlice.test', () => {
  test('success set position scroll', () => {
    const state: DeepPartial<ScrollSaveSchema> = {
      scroll: {
        articles: 20
      }
    }
    expect(scrollSavesReducer(state as ScrollSaveSchema, scrollSaveActions.setScrollPosition({ path: 'articles', position: 50 }))).toEqual({
      scroll: {
        articles: 50
      }
    })
  })
})
