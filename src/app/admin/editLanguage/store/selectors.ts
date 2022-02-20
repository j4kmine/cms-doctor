import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'
import {EditLanguageStateInterface} from '../types/editLanguageState.interface'

export const editLanguageFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditLanguageStateInterface
>('editLanguage')

export const languageSelector = createSelector(
  editLanguageFeatureSelector,
  (editLanguageState: EditLanguageStateInterface) => editLanguageState.language
)



export const isSubmittingSelector = createSelector(
  editLanguageFeatureSelector,
  (editLanguageState: EditLanguageStateInterface) => editLanguageState.isSubmitting
)

