import {UserInputInterface} from '../../shared/types/userInput.interface'

export interface EditUserStateInterface {
  isSubmitting: boolean,
  user: UserInputInterface | null,
  isloading: boolean | false
}
