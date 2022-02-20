import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateLanguageStateInterface} from '../types/createLanguageState.interface'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'

export const createLanguageFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateLanguageStateInterface
>('createLanguage')

export const isSubmittingSelector = createSelector(
  createLanguageFeatureSelector,
  (createLanguageState: CreateLanguageStateInterface) =>
  createLanguageState.isSubmitting
)

