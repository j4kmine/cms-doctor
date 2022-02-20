import { createReducer, on, Action } from '@ngrx/store'
import { EditUserStateInterface } from '../types/editUserState.interface'
import {
  editUserAction,
  editUserSuccessAction,
  editUserFailureAction
} from '../store/actions/editUser.action'
import {
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction,
} from '../store/actions/getUser.action'

const initialState: EditUserStateInterface = {
  user: null,
  isSubmitting: false,
  isloading:false,
}

const editUserReducer = createReducer(
  initialState,
  on(
    editUserAction,
    (state): EditUserStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editUserSuccessAction,
    (state): EditUserStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editUserFailureAction,
    (state, action): EditUserStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getUserAction,
    (state): EditUserStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getUserSuccessAction,
    (state, action): EditUserStateInterface => ({
      ...state,
      user: action.user,
      isloading:false
    })
  ),
  on(
    getUserFailureAction,
    (state): EditUserStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditUserStateInterface, action: Action) {
  return editUserReducer(state, action)
}
