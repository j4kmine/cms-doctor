import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {LanguageInputInterface} from '../../../shared/types/languageInput.interface'

export const getLanguageAction = createAction(
  ActionTypes.GET_LANGUAGE,
  props<{id: number}>()
)

export const getLanguageSuccessAction = createAction(
  ActionTypes.GET_LANGUAGE_SUCCESS,
  props<{language: LanguageInputInterface}>()
)

export const getLanguageFailureAction = createAction(
  ActionTypes.GET_LANGUAGE_FAILURE
)
