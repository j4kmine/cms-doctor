import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateUserStateInterface} from '../types/createUserState.interface'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'

export const createUserFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateUserStateInterface
>('createUser')

export const isSubmittingSelector = createSelector(
  createUserFeatureSelector,
  (createUserState: CreateUserStateInterface) =>
  createUserState.isSubmitting
)

