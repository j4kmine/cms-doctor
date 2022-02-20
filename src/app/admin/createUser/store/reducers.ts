import {CreateUserStateInterface} from '../types/createUserState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createUserAction,
  createUserSuccessAction,
  createUserFailureAction,
} from './actions/createUser.action'

const initialState: CreateUserStateInterface = {
  isSubmitting: false
}

const createUserReducer = createReducer(
  initialState,
  on(
    createUserAction,
    (state): CreateUserStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createUserSuccessAction,
    (state): CreateUserStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createUserFailureAction,
    (state, action): CreateUserStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateUserStateInterface, action: Action) {
  return createUserReducer(state, action)
}
