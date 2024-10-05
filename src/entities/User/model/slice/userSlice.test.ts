import type { User } from '../types/User';
import { userActions, userReducer } from './userSlice';

const user: User = {
  id: '',
  username: '',
  avatar: '',
};

describe('userSlice', () => {
  test('test set authData', () => {
    expect(
      userReducer(
        { authData: user },
        userActions.setAuthData({
          id: '1',
          username: 'admin',
          avatar: 'avatar',
        }),
      ),
    ).toEqual({
      authData: {
        id: '1',
        username: 'admin',
        avatar: 'avatar',
      },
    });
  });

  test('test logout', () => {
    expect(
      userReducer(
        {
          authData: {
            id: '1',
            username: 'admin',
            avatar: 'avatar',
          },
        },
        userActions.logout(),
      ),
    ).toEqual({
      authData: undefined,
    });
  });
});
