import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserCategoryInputInterface} from '../../../shared/types/usercategoryInput.interface'


export const editUserCategoryAction = createAction(
  ActionTypes.UPDATE_USERCATEGORY,
  props<{id: number,usercategoryInput: UserCategoryInputInterface}>()
)

export const editUserCategorySuccessAction = createAction(
  ActionTypes.UPDATE_USERCATEGORY_SUCCESS,
  props<{usercategory: any}>()
)

export const editUserCategoryFailureAction = createAction(
  ActionTypes.UPDATE_USERCATEGORY_FAILURE,
  props<{errors: any}>()
)
