import { Profile, ValidateProfileErrors } from "../../types/profile";

export const validateProfile = (profile?: Profile) => {

  if (!profile) {
    return [ValidateProfileErrors.NoData]
  }

  const { age, lastName, first, city } = profile
  const errors: ValidateProfileErrors[] = []

  if (!lastName || !first) {
    errors.push(ValidateProfileErrors.IncorrectUserData)
  }

  if (age) {
    if (age < 18 || age > 99) {
      errors.push(ValidateProfileErrors.IncorrectAge)
    }
  }

  if (!age && !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.IncorrectAge)
  }

  if (!city) {
    errors.push(ValidateProfileErrors.IncorrectCity)
  }

  return errors
}