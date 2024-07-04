import { SerializedError } from "@reduxjs/toolkit";
import { Country } from "entities/Country/model/types/countries";
import { Currency } from "entities/Currency/model/types/currency";

export enum ValidateProfileErrors {
  'IncorrectUserData' = 'IncorrectUserData',
  'IncorrectAge' = 'IncorrectAge',
  'IncorrectCity' = 'IncorrectCity',
  'NoData' = 'NoData',
  'ServerError' = 'ServerError'
}

export interface Profile {
  id?: string,
  first?: string,
  lastName?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string | SerializedError
  readonly: boolean
  validateErrors?: ValidateProfileErrors[]
}