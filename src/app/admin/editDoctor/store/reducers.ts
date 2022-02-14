import { createReducer, on, Action } from '@ngrx/store'
import { EditDoctorStateInterface } from '../types/editDoctorState.interface'
import {
  editDoctorAction,
  editDoctorSuccessAction,
  editDoctorFailureAction
} from './actions/editDoctor.action'
import {
  getDoctorAction,
  getDoctorSuccessAction,
  getDoctorFailureAction,
} from './actions/getDoctor.action'

const initialState: EditDoctorStateInterface = {
  doctor: null,
  isSubmitting: false,
  isloading:false,
}

const editDoctorReducer = createReducer(
  initialState,
  on(
    editDoctorAction,
    (state): EditDoctorStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editDoctorSuccessAction,
    (state): EditDoctorStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editDoctorFailureAction,
    (state, action): EditDoctorStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getDoctorAction,
    (state): EditDoctorStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getDoctorSuccessAction,
    (state, action): EditDoctorStateInterface => ({
      ...state,
      doctor: action.doctor,
      isloading:false
    })
  ),
  on(
    getDoctorFailureAction,
    (state): EditDoctorStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditDoctorStateInterface, action: Action) {
  return editDoctorReducer(state, action)
}
