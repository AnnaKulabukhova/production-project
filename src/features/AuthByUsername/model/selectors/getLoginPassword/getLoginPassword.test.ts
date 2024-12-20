import { getLoginPassword } from './getLoginPassword';
import type { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { password: '1213', username: '', isLoading: false } };
    expect(getLoginPassword(state as StateSchema)).toEqual('1213');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
