import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'
import {GetTablelistResponseInterface} from '../types/getTablelistResponse.interface'

export const tablelistFeatureSelector = createFeatureSelector<
  AppStateInterface,
  GetTablelistResponseInterface
>('GetTablelist')

export const tablelistSelector = createSelector(
  tablelistFeatureSelector,
  (tablelistState: GetTablelistResponseInterface) => tablelistState
)
