import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateUserCategoryStateInterface} from '../types/createUserCategoryState.interface'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'

export const createUserCategoryFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateUserCategoryStateInterface
>('createUserCategory')

export const isSubmittingSelector = createSelector(
  createUserCategoryFeatureSelector,
  (createUserCategoryState: CreateUserCategoryStateInterface) =>
  createUserCategoryState.isSubmitting
)

