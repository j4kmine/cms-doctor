import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserInputInterface} from '../../../shared/types/userInput.interface'


export const createUserAction = createAction(
  ActionTypes.CREATE_USER,
  props<{userInput: UserInputInterface}>()
)

export const createUserSuccessAction = createAction(
  ActionTypes.CREATE_USER_SUCCESS,
  props<{user: any}>()
)

export const createUserFailureAction = createAction(
  ActionTypes.CREATE_USER_FAILURE,
  props<{errors: any}>()
)
