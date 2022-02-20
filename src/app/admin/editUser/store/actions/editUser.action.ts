import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserInputInterface} from '../../../shared/types/userInput.interface'


export const editUserAction = createAction(
  ActionTypes.UPDATE_USER,
  props<{id: number,userInput: UserInputInterface}>()
)

export const editUserSuccessAction = createAction(
  ActionTypes.UPDATE_USER_SUCCESS,
  props<{user: any}>()
)

export const editUserFailureAction = createAction(
  ActionTypes.UPDATE_USER_FAILURE,
  props<{errors: any}>()
)
