import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {DoctorInputInterface} from '../../../shared/types/doctorInput.interfce'


export const createDoctorAction = createAction(
  ActionTypes.CREATE_DOCTOR,
  props<{DoctorInput: DoctorInputInterface}>()
)

export const createDoctorSuccessAction = createAction(
  ActionTypes.CREATE_DOCTOR_SUCCESS,
  props<{Doctor: any}>()
)

export const createDoctorFailureAction = createAction(
  ActionTypes.CREATE_DOCTOR_FAILURE,
  props<{errors: any}>()
)
