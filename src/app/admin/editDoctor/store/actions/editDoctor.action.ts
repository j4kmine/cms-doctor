import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {DoctorInputInterface} from '../../../shared/types/doctorInput.interfce'


export const editDoctorAction = createAction(
  ActionTypes.UPDATE_CUSTOMER,
  props<{id: number,doctorInput: DoctorInputInterface}>()
)

export const editDoctorSuccessAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_SUCCESS,
  props<{doctor: any}>()
)

export const editDoctorFailureAction = createAction(
  ActionTypes.UPDATE_CUSTOMER_FAILURE,
  props<{errors: any}>()
)
