import { createReducer, on, Action } from '@ngrx/store'
import { EditCustomerStateInterface } from '../types/editCustomerState.interface'
import {
  editCustomerAction,
  editCustomerSuccessAction,
  editCustomerFailureAction
} from '../store/actions/editCustomer.action'
import {
  getCustomerAction,
  getCustomerSuccessAction,
  getCustomerFailureAction,
} from '../store/actions/getCustomer.action'

const initialState: EditCustomerStateInterface = {
  customer: null,
  isSubmitting: false,
  isloading:false,
}

const editCustomerReducer = createReducer(
  initialState,
  on(
    editCustomerAction,
    (state): EditCustomerStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editCustomerSuccessAction,
    (state): EditCustomerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editCustomerFailureAction,
    (state, action): EditCustomerStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getCustomerAction,
    (state): EditCustomerStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getCustomerSuccessAction,
    (state, action): EditCustomerStateInterface => ({
      ...state,
      customer: action.customer,
      isloading:false
    })
  ),
  on(
    getCustomerFailureAction,
    (state): EditCustomerStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditCustomerStateInterface, action: Action) {
  return editCustomerReducer(state, action)
}
