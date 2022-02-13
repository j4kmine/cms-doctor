import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {GetTablelistResponseInterface} from '../../types/getTablelistResponse.interface'

export const getTablelistAction = createAction(
  ActionTypes.GET_CUSTOMER,
  props<{url: string}>()
)

export const getTablelistSuccessAction = createAction(
  ActionTypes.GET_CUSTOMER_SUCCESS,
  props<{results: GetTablelistResponseInterface}>()
)

export const getTablelistFailureAction = createAction(ActionTypes.GET_CUSTOMER_FAILURE)
