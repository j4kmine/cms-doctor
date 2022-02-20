import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'
import {EditUserCategoryStateInterface} from '../types/editUserCategoryState.interface'

export const editUserCategoryFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditUserCategoryStateInterface
>('editUserCategory')

export const usercategorySelector = createSelector(
  editUserCategoryFeatureSelector,
  (editUserCategoryState: EditUserCategoryStateInterface) => editUserCategoryState.usercategory
)



export const isSubmittingSelector = createSelector(
  editUserCategoryFeatureSelector,
  (editUserCategoryState: EditUserCategoryStateInterface) => editUserCategoryState.isSubmitting
)

