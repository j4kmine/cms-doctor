import {CreateUserCategoryStateInterface} from '../types/createUserCategoryState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createUserCategoryAction,
  createUserCategorySuccessAction,
  createUserCategoryFailureAction,
} from './actions/createUserCategory.action'

const initialState: CreateUserCategoryStateInterface = {
  isSubmitting: false
}

const createUserCategoryReducer = createReducer(
  initialState,
  on(
    createUserCategoryAction,
    (state): CreateUserCategoryStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createUserCategorySuccessAction,
    (state): CreateUserCategoryStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createUserCategoryFailureAction,
    (state, action): CreateUserCategoryStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateUserCategoryStateInterface, action: Action) {
  return createUserCategoryReducer(state, action)
}
