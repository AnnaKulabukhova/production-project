import { Currency } from '@/entities/Currency';
import { validateProfile } from './validateProfile';
import { Country } from '@/entities/Country';
import { ValidateProfileErrors } from '../../consts/EditableProfileCardConsts';

const data = {
  first: 'Leanne',
  lastName: 'Graham',
  age: 18,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('validateProfile', () => {
  test('success', () => {
    const result = validateProfile(data);
    expect(result).toEqual([]);
  });
  test('without first and lastName', () => {
    const result = validateProfile({ ...data, first: '', lastName: '' });
    expect(result).toEqual([ValidateProfileErrors.IncorrectUserData]);
  });
  test('Incorrect age(<18)', () => {
    const result = validateProfile({ ...data, age: 15 });
    expect(result).toEqual([ValidateProfileErrors.IncorrectAge]);
  });
  test('Incorrect age(>99)', () => {
    const result = validateProfile({ ...data, age: 111 });
    expect(result).toEqual([ValidateProfileErrors.IncorrectAge]);
  });
  test('correct number)', () => {
    const result = validateProfile({ ...data, age: 9.6 });
    expect(result).toEqual([ValidateProfileErrors.IncorrectAge]);
  });
  test('incorrect city', () => {
    const result = validateProfile({ ...data, city: '' });
    expect(result).toEqual([ValidateProfileErrors.IncorrectCity]);
  });
  test('incorrect all', () => {
    const result = validateProfile({});
    expect(result).toEqual([
      ValidateProfileErrors.IncorrectUserData,
      ValidateProfileErrors.IncorrectAge,
      ValidateProfileErrors.IncorrectCity,
    ]);
  });
});
