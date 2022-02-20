import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {UserCategoryInputInterface} from '../../../shared/types/usercategoryInput.interface'


export const createUserCategoryAction = createAction(
  ActionTypes.CREATE_USERCATEGORY,
  props<{usercategoryInput: UserCategoryInputInterface}>()
)

export const createUserCategorySuccessAction = createAction(
  ActionTypes.CREATE_USERCATEGORY_SUCCESS,
  props<{usercategory: any}>()
)

export const createUserCategoryFailureAction = createAction(
  ActionTypes.CREATE_USERCATEGORY_FAILURE,
  props<{errors: any}>()
)
