import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {EditCustomerStateInterface} from '../types/editCustomerState.interface'

export const editCustomerFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditCustomerStateInterface
>('editCustomer')

export const customerSelector = createSelector(
  editCustomerFeatureSelector,
  (editCustomerState: EditCustomerStateInterface) => editCustomerState.customer
)



export const isSubmittingSelector = createSelector(
  editCustomerFeatureSelector,
  (editCustomerState: EditCustomerStateInterface) => editCustomerState.isSubmitting
)

