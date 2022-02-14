import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'

import {GetTablelistResponseInterface} from '../types/getTablelistResponse.interface'
import {
  getTablelistAction,
  getTablelistSuccessAction,
  getTablelistFailureAction
} from '../store/actions/getTablelist.action'

const initialState: GetTablelistResponseInterface = {
  results: null,
  pagination:null
}

const tablelistReducer = createReducer(
  initialState,
  on(
    getTablelistAction,
    (state): GetTablelistResponseInterface => ({
      ...state,
    })
  ),
  on(
    getTablelistSuccessAction,
    (state, action): GetTablelistResponseInterface => ({
      ...state,
      results: action.results.results,
      pagination:action.results.pagination,
    })
  ),
  on(
    getTablelistFailureAction,
    (state): GetTablelistResponseInterface => ({
      ...state,

    })
  ),
  on(routerNavigationAction, (): GetTablelistResponseInterface => initialState)
)

export function reducers(state: GetTablelistResponseInterface, action: Action) {
  return tablelistReducer(state, action)
}
