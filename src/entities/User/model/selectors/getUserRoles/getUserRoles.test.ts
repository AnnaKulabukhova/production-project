import type { StateSchema } from '@/app/providers/StoreProvider'
import { UserRole } from '../../consts/userConsts'
import { isUserAdmin, isUserManager } from './getUserRoles'

describe('getUserRoles.test', () => {
  test('accept role admin', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.admin]
        }
      }
    }
    expect(isUserAdmin(state as StateSchema)).toEqual(true)
  })
  test('is not an admin', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.manager]
        }
      }
    }
    expect(isUserAdmin(state as StateSchema)).toEqual(false)
  })
  test('empty state for admin', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {}
      }
    }
    expect(isUserAdmin(state as StateSchema)).toEqual(false)
  })

  test('accept role manager', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.manager]
        }
      }
    }
    expect(isUserManager(state as StateSchema)).toEqual(true)
  })
  test('is not a manager', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.user]
        }
      }
    }
    expect(isUserManager(state as StateSchema)).toEqual(false)
  })
  test('empty state for manager', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {}
      }
    }
    expect(isUserManager(state as StateSchema)).toEqual(false)
  })
})
