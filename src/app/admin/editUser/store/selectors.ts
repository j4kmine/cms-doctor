import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'
import {EditUserStateInterface} from '../types/editUserState.interface'

export const editUserFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditUserStateInterface
>('editUser')

export const userSelector = createSelector(
  editUserFeatureSelector,
  (editUserState: EditUserStateInterface) => editUserState.user
)



export const isSubmittingSelector = createSelector(
  editUserFeatureSelector,
  (editUserState: EditUserStateInterface) => editUserState.isSubmitting
)

