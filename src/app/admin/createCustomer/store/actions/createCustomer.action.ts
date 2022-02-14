import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {CustomerInputInterface} from '../../../shared/types/customerInput.interface'


export const createCustomerAction = createAction(
  ActionTypes.CREATE_CUSTOMER,
  props<{customerInput: CustomerInputInterface}>()
)

export const createCustomerSuccessAction = createAction(
  ActionTypes.CREATE_CUSTOMER_SUCCESS,
  props<{customer: any}>()
)

export const createCustomerFailureAction = createAction(
  ActionTypes.CREATE_CUSTOMER_FAILURE,
  props<{errors: any}>()
)
