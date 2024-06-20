import { COuntry, Currency } from "shared/const/common";

export interface Profile {
  first: string,
  lastName: string,
  age: number,
  currency: Currency,
  country: COuntry,
  city: string,
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}