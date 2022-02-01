import {CreateDoctorStateInterface} from '../types/createDoctorState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createDoctorAction,
  createDoctorSuccessAction,
  createDoctorFailureAction,
} from './actions/createDoctor.action'

const initialState: CreateDoctorStateInterface = {
  isSubmitting: false
}

const createDoctorReducer = createReducer(
  initialState,
  on(
    createDoctorAction,
    (state): CreateDoctorStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createDoctorSuccessAction,
    (state): CreateDoctorStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createDoctorFailureAction,
    (state, action): CreateDoctorStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateDoctorStateInterface, action: Action) {
  return createDoctorReducer(state, action)
}
