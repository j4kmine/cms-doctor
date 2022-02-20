import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserCategoryInputInterface} from '../../../shared/types/usercategoryInput.interface'

export const getUserCategoryAction = createAction(
  ActionTypes.GET_USERCATEGORY,
  props<{id: number}>()
)

export const getUserCategorySuccessAction = createAction(
  ActionTypes.GET_USERCATEGORY_SUCCESS,
  props<{usercategory: UserCategoryInputInterface}>()
)

export const getUserCategoryFailureAction = createAction(
  ActionTypes.GET_USERCATEGORY_FAILURE
)
