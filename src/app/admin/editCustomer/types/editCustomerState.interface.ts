import {CustomerInputInterface} from '../../shared/types/customerInput.interface'

export interface EditCustomerStateInterface {
  isSubmitting: boolean,
  customer: CustomerInputInterface | null,
  isloading: boolean | false
}
