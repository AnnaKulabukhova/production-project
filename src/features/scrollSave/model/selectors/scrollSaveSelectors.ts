import { createSelector } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollSave = (state: StateSchema) => state.scrollSave.scroll;
export const getScrollSaveBypath = createSelector(
  getScrollSave,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
