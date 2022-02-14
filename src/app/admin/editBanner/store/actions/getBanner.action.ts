import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {BannerInputInterface} from '../../../shared/types/bannerInput.interface'

export const getBannerAction = createAction(
  ActionTypes.GET_CUSTOMER,
  props<{id: number}>()
)

export const getBannerSuccessAction = createAction(
  ActionTypes.GET_CUSTOMER_SUCCESS,
  props<{banner: BannerInputInterface}>()
)

export const getBannerFailureAction = createAction(
  ActionTypes.GET_CUSTOMER_FAILURE
)
