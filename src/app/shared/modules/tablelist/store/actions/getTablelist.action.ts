import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {GetTablelistResponseInterface} from '../../types/getTablelistResponse.interface'

export const getTablelistAction = createAction(
  ActionTypes.GET_DATALIST,
  props<{url: string}>()
)

export const getTablelistSuccessAction = createAction(
  ActionTypes.GET_DATALIST_SUCCESS,
  props<{results: GetTablelistResponseInterface}>()
)

export const getTablelistFailureAction = createAction(ActionTypes.GET_DATALIST_FAILURE)

export const deleteTablelistAction = createAction(
  ActionTypes.DELETE_DATALIST,
  props<{fullurl: string}>()
)

export const deleteTablelistSuccessAction = createAction(
  ActionTypes.DELETE_DATALIST_SUCCESS
)

export const deleteTablelistFailureAction = createAction(
  ActionTypes.DELETE_DATALIST_FAILURE
)

