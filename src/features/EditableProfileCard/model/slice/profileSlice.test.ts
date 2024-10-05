import { profileActions, profileReducer } from './profileSlice';
import { ValidateProfileErrors } from '../consts/EditableProfileCardConsts';
import { type ProfileSchema } from '../types/editableProfileCardSchema';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  first: 'Leanne',
  lastName: 'Graham',
  age: 18,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({ readonly: true });
  });

  test('test  cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      form: data,
      readonly: true,
      validateErrors: undefined,
      data,
    });
  });

  test('test  update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '1235' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '1235' }))).toEqual({
      form: { username: '1235' },
    });
  });

  test('test  update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.IncorrectAge],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending(''))).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test  update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
