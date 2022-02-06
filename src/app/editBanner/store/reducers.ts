import { createReducer, on, Action } from '@ngrx/store'
import { EditBannerStateInterface } from '../types/editBannerState.interface'
import {
  editBannerAction,
  editBannerSuccessAction,
  editBannerFailureAction
} from './actions/editBanner.action'
import {
  getBannerAction,
  getBannerSuccessAction,
  getBannerFailureAction,
} from './actions/getBanner.action'

const initialState: EditBannerStateInterface = {
  banner: null,
  isSubmitting: false,
  isloading:false,
}

const editBannerReducer = createReducer(
  initialState,
  on(
    editBannerAction,
    (state): EditBannerStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editBannerSuccessAction,
    (state): EditBannerStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editBannerFailureAction,
    (state, action): EditBannerStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getBannerAction,
    (state): EditBannerStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getBannerSuccessAction,
    (state, action): EditBannerStateInterface => ({
      ...state,
      banner: action.banner,
      isloading:false
    })
  ),
  on(
    getBannerFailureAction,
    (state): EditBannerStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditBannerStateInterface, action: Action) {
  return editBannerReducer(state, action)
}
