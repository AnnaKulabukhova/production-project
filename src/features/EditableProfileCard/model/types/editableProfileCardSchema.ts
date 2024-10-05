import type { SerializedError } from '@reduxjs/toolkit';
import type { Profile } from '@/entities/Profile';
import type { ValidateProfileErrors } from '../consts/EditableProfileCardConsts';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string | SerializedError;
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[];
}
