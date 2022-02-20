import { createReducer, on, Action } from '@ngrx/store'
import { EditUserCategoryStateInterface } from '../types/editUserCategoryState.interface'
import {
  editUserCategoryAction,
  editUserCategorySuccessAction,
  editUserCategoryFailureAction
} from '../store/actions/editUserCategory.action'
import {
  getUserCategoryAction,
  getUserCategorySuccessAction,
  getUserCategoryFailureAction,
} from '../store/actions/getUserCategory.action'

const initialState: EditUserCategoryStateInterface = {
  usercategory: null,
  isSubmitting: false,
  isloading:false,
}

const editUserCategoryReducer = createReducer(
  initialState,
  on(
    editUserCategoryAction,
    (state): EditUserCategoryStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editUserCategorySuccessAction,
    (state): EditUserCategoryStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editUserCategoryFailureAction,
    (state, action): EditUserCategoryStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getUserCategoryAction,
    (state): EditUserCategoryStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getUserCategorySuccessAction,
    (state, action): EditUserCategoryStateInterface => ({
      ...state,
      usercategory: action.usercategory,
      isloading:false
    })
  ),
  on(
    getUserCategoryFailureAction,
    (state): EditUserCategoryStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditUserCategoryStateInterface, action: Action) {
  return editUserCategoryReducer(state, action)
}
