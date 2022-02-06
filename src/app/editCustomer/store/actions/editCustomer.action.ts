import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {CustomerInputInterface} from '../../../shared/types/customerInput.interface'


export const editCustomerAction = createAction(
  ActionTypes.UPDATE_CUSTOMER,
  props<{id: number,customerInput: CustomerInputInterface}>()
)

export const editCustomerSuccessAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_SUCCESS,
  props<{customer: any}>()
)

export const editCustomerFailureAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_FAILURE,
  props<{errors: any}>()
)
