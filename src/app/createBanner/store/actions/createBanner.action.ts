import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {BannerInputInterface} from '../../../shared/types/BannerInput.interface'


export const createBannerAction = createAction(
  ActionTypes.CREATE_BANNER,
  props<{BannerInput: BannerInputInterface}>()
)

export const createBannerSuccessAction = createAction(
  ActionTypes.CREATE_BANNER_SUCCESS,
  props<{Banner: any}>()
)

export const createBannerFailureAction = createAction(
  ActionTypes.CREATE_BANNER_FAILURE,
  props<{errors: any}>()
)
