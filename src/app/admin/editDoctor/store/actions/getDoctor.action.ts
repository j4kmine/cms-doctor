import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {DoctorInputInterface} from '../../../shared/types/doctorInput.interfce'

export const getDoctorAction = createAction(
  ActionTypes.GET_CUSTOMER,
  props<{id: number}>()
)

export const getDoctorSuccessAction = createAction(
  ActionTypes.GET_CUSTOMER_SUCCESS,
  props<{doctor: DoctorInputInterface}>()
)

export const getDoctorFailureAction = createAction(
  ActionTypes.GET_CUSTOMER_FAILURE
)
