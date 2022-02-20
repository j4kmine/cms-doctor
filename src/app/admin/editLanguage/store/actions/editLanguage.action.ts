import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {LanguageInputInterface} from '../../../shared/types/languageInput.interface'


export const editLanguageAction = createAction(
  ActionTypes.UPDATE_LANGUAGE,
  props<{id: number,languageInput: LanguageInputInterface}>()
)

export const editLanguageSuccessAction = createAction(
  ActionTypes.UPDATE_LANGUAGE_SUCCESS,
  props<{language: any}>()
)

export const editLanguageFailureAction = createAction(
  ActionTypes.UPDATE_LANGUAGE_FAILURE,
  props<{errors: any}>()
)
