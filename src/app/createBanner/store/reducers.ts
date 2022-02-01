import {CreateBannerStateInterface} from '../types/createBannerState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createBannerAction,
  createBannerSuccessAction,
  createBannerFailureAction,
} from './actions/createBanner.action'

const initialState: CreateBannerStateInterface = {
  isSubmitting: false
}

const createBannerReducer = createReducer(
  initialState,
  on(
    createBannerAction,
    (state): CreateBannerStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createBannerSuccessAction,
    (state): CreateBannerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createBannerFailureAction,
    (state, action): CreateBannerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateBannerStateInterface, action: Action) {
  return createBannerReducer(state, action)
}
