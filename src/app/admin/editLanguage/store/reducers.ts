import { createReducer, on, Action } from '@ngrx/store'
import { EditLanguageStateInterface } from '../types/editLanguageState.interface'
import {
  editLanguageAction,
  editLanguageSuccessAction,
  editLanguageFailureAction
} from '../store/actions/editLanguage.action'
import {
  getLanguageAction,
  getLanguageSuccessAction,
  getLanguageFailureAction,
} from '../store/actions/getLanguage.action'

const initialState: EditLanguageStateInterface = {
  language: null,
  isSubmitting: false,
  isloading:false,
}

const editLanguageReducer = createReducer(
  initialState,
  on(
    editLanguageAction,
    (state): EditLanguageStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editLanguageSuccessAction,
    (state): EditLanguageStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editLanguageFailureAction,
    (state, action): EditLanguageStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getLanguageAction,
    (state): EditLanguageStateInterface => ({
      ...state,
      isloading:true
    })
  ),
  on(
    getLanguageSuccessAction,
    (state, action): EditLanguageStateInterface => ({
      ...state,
      language: action.language,
      isloading:false
    })
  ),
  on(
    getLanguageFailureAction,
    (state): EditLanguageStateInterface => ({
      ...state,
      isloading:false,
    })
  )
)

export function reducers(state: EditLanguageStateInterface, action: Action) {
  return editLanguageReducer(state, action)
}
