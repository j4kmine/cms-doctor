import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserInputInterface} from '../../../shared/types/userInput.interface'

export const getUserAction = createAction(
  ActionTypes.GET_USER,
  props<{id: number}>()
)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{user: UserInputInterface}>()
)

export const getUserFailureAction = createAction(
  ActionTypes.GET_USER_FAILURE
)
