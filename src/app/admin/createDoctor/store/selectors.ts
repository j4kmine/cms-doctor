import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateDoctorStateInterface} from '../types/createDoctorState.interface'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'

export const createDoctorFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateDoctorStateInterface
>('createDoctor')

export const isSubmittingSelector = createSelector(
  createDoctorFeatureSelector,
  (createDoctorState: CreateDoctorStateInterface) =>
  createDoctorState.isSubmitting
)

