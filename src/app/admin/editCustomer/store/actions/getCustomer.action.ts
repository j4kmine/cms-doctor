import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {CustomerInputInterface} from '../../../shared/types/customerInput.interface'

export const getCustomerAction = createAction(
  ActionTypes.GET_CUSTOMER,
  props<{id: number}>()
)

export const getCustomerSuccessAction = createAction(
  ActionTypes.GET_CUSTOMER_SUCCESS,
  props<{customer: CustomerInputInterface}>()
)

export const getCustomerFailureAction = createAction(
  ActionTypes.GET_CUSTOMER_FAILURE
)
