import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {EditBannerStateInterface} from '../types/editBannerState.interface'

export const editBannerFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditBannerStateInterface
>('EditBanner')

export const bannerSelector = createSelector(
  editBannerFeatureSelector,
  (editBannerState: EditBannerStateInterface) => editBannerState.banner
)



export const isSubmittingSelector = createSelector(
  editBannerFeatureSelector,
  (editBannerState: EditBannerStateInterface) => editBannerState.isSubmitting
)

