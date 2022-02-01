import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateBannerStateInterface} from '../types/createBannerState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const createBannerFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateBannerStateInterface
>('createBanner')

export const isSubmittingSelector = createSelector(
  createBannerFeatureSelector,
  (createBannerState: CreateBannerStateInterface) =>
  createBannerState.isSubmitting
)

