import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {LanguageInputInterface} from '../../../shared/types/languageInput.interface'


export const createLanguageAction = createAction(
  ActionTypes.CREATE_LANGUAGE,
  props<{languageInput: LanguageInputInterface}>()
)

export const createLanguageSuccessAction = createAction(
  ActionTypes.CREATE_LANGUAGE_SUCCESS,
  props<{language: any}>()
)

export const createLanguageFailureAction = createAction(
  ActionTypes.CREATE_LANGUAGE_FAILURE,
  props<{errors: any}>()
)
