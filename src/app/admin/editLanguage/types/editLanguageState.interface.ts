import {LanguageInputInterface} from '../../shared/types/languageInput.interface'

export interface EditLanguageStateInterface {
  isSubmitting: boolean,
  language: LanguageInputInterface | null,
  isloading: boolean | false
}
