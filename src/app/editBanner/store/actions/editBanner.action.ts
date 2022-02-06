import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {BannerInputInterface} from '../../../shared/types/bannerInput.interface'


export const editBannerAction = createAction(
  ActionTypes.UPDATE_CUSTOMER,
  props<{id: number,bannerInput: BannerInputInterface}>()
)

export const editBannerSuccessAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_SUCCESS,
  props<{banner: any}>()
)

export const editBannerFailureAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_FAILURE,
  props<{errors: any}>()
)
