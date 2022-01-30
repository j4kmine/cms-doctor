import {CreateCustomerStateInterface} from '../types/createCustomerState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createCustomerAction,
  createCustomerSuccessAction,
  createCustomerFailureAction,
} from './actions/createCustomer.action'

const initialState: CreateCustomerStateInterface = {
  isSubmitting: false
}

const createCustomerReducer = createReducer(
  initialState,
  on(
    createCustomerAction,
    (state): CreateCustomerStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createCustomerSuccessAction,
    (state): CreateCustomerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createCustomerFailureAction,
    (state, action): CreateCustomerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateCustomerStateInterface, action: Action) {
  return createCustomerReducer(state, action)
}
