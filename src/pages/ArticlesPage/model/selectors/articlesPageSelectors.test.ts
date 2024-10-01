import type { StateSchema } from '@/app/providers/StoreProvider'
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInit,
  getArticlesPageLimit,
  getArticlesPageLoading,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from './articlesPageSelectors'
import { ArticleSortField, ArticlesViews, ArticleType } from '@/entities/Article'

describe('articlesPage.test', () => {
  // Order
  test('success return order', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        order: 'desc'
      }
    }
    expect(getArticlesPageOrder(state as StateSchema)).toEqual('desc')
  })

  test('should work with empty order', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {}
    }
    expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc')
  })
  // Search
  test('success return search', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        search: 'test'
      }
    }
    expect(getArticlesPageSearch(state as StateSchema)).toEqual('test')
  })

  test('should work with empty search', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {}
    }
    expect(getArticlesPageSearch(state as StateSchema)).toEqual('')
  })
  // Sort
  test('success return sort', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: ArticleSortField.Title
      }
    }
    expect(getArticlesPageSort(state as StateSchema)).toEqual('title')
  })

  test('should work with empty sort', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {}
    }
    expect(getArticlesPageSort(state as StateSchema)).toEqual('createAt')
  })
  // Type
  test('success return type', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        type: ArticleType.Economics
      }
    }
    expect(getArticlesPageType(state as StateSchema)).toEqual('economics')
  })

  test('should work with empty type', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {}
    }
    expect(getArticlesPageType(state as StateSchema)).toEqual('all')
  })

  // View
  test('success return view', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticlesViews.Big
      }
    }
    expect(getArticlesPageView(state as StateSchema)).toEqual('big')
  })

  test('should work with empty view', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {}
    }
    expect(getArticlesPageView(state as StateSchema)).toEqual('small')
  })
})
// HasMore
test('success return hasMore', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      hasMore: true
    }
  }
  expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true)
})

test('should work with empty hasMore', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {}
  }
  expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined)
})
// Init
test('success return view', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      _init: true
    }
  }
  expect(getArticlesPageInit(state as StateSchema)).toEqual(true)
})

// Error
test('success return error', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      error: 'error'
    }
  }
  expect(getArticlesPageError(state as StateSchema)).toEqual('error')
})

test('should work with empty error', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {}
  }
  expect(getArticlesPageError(state as StateSchema)).toEqual(undefined)
})

// IsLoading
test('success return IsLoading', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      isLoading: true
    }
  }
  expect(getArticlesPageLoading(state as StateSchema)).toEqual(true)
})

// Page Num
test('success return page num', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      page: 5
    }
  }
  expect(getArticlesPageNum(state as StateSchema)).toEqual(5)
})

test('should work with empty page num', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {}
  }
  expect(getArticlesPageNum(state as StateSchema)).toEqual(1)
})

// Limit
test('success return limit', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {
      limit: 6
    }
  }
  expect(getArticlesPageLimit(state as StateSchema)).toEqual(6)
})

test('should work with empty  limit', () => {
  const state: DeepPartial<StateSchema> = {
    articlesPage: {}
  }
  expect(getArticlesPageLimit(state as StateSchema)).toEqual(9)
})
