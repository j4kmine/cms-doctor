import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateCustomerStateInterface} from '../types/createCustomerState.interface'
import {AppStateInterface} from 'src/app/admin/shared/types/appState.interface'

export const createCustomerFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateCustomerStateInterface
>('createCustomer')

export const isSubmittingSelector = createSelector(
  createCustomerFeatureSelector,
  (createCustomerState: CreateCustomerStateInterface) =>
  createCustomerState.isSubmitting
)

