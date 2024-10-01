export const getQueryParams = (params: OptionalRecord<string, string>) => {
  // Объект с существующими параметрами, которые есть в строке запроса
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      // Записать в параметры переданные данные
      searchParams.set(name, value)
    }
  })
  return `?${searchParams.toString()}`
}

// Функция добавления параметров запроса в URL
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params))
}
