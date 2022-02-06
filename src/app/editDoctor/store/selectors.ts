import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {EditDoctorStateInterface} from '../types/editDoctorState.interface'

export const editDoctorFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditDoctorStateInterface
>('EditDoctor')

export const doctorSelector = createSelector(
  editDoctorFeatureSelector,
  (editDoctorState: EditDoctorStateInterface) => editDoctorState.doctor
)



export const isSubmittingSelector = createSelector(
  editDoctorFeatureSelector,
  (editDoctorState: EditDoctorStateInterface) => editDoctorState.isSubmitting
)

