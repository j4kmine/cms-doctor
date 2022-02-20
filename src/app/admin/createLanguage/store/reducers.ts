import {CreateLanguageStateInterface} from '../types/createLanguageState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createLanguageAction,
  createLanguageSuccessAction,
  createLanguageFailureAction,
} from './actions/createLanguage.action'

const initialState: CreateLanguageStateInterface = {
  isSubmitting: false
}

const createLanguageReducer = createReducer(
  initialState,
  on(
    createLanguageAction,
    (state): CreateLanguageStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createLanguageSuccessAction,
    (state): CreateLanguageStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createLanguageFailureAction,
    (state, action): CreateLanguageStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
)

export function reducers(state: CreateLanguageStateInterface, action: Action) {
  return createLanguageReducer(state, action)
}
