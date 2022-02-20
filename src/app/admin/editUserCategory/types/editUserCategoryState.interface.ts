import {UserCategoryInputInterface} from '../../shared/types/usercategoryInput.interface'

export interface EditUserCategoryStateInterface {
  isSubmitting: boolean,
  usercategory: UserCategoryInputInterface | null,
  isloading: boolean | false
}
