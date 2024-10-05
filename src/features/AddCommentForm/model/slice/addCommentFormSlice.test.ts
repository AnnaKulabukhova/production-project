import { type AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
  const state: DeepPartial<AddCommentFormSchema> = { text: '' };
  test('test set text', () => {
    expect(addCommentFormReducer(state, addCommentFormActions.setText('123'))).toEqual({ text: '123' });
  });
});
