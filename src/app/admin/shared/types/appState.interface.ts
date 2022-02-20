import {CustomerInputInterface} from '../types/customerInput.interface'
import {BannerInputInterface} from '../types/bannerInput.interface'
import { DoctorInputInterface } from '../types/doctorInput.interfce'
import { UserInputInterface } from '../types/userInput.interface'
import { EditUserStateInterface } from '../../editUser/types/editUserState.interface'
import { EditCustomerStateInterface } from '../../editCustomer/types/editCustomerState.interface'
import { EditDoctorStateInterface } from '../../editDoctor/types/editDoctorState.interface'
import { EditBannerStateInterface } from '../../editBanner/types/editBannerState.interface'
import { GetTablelistResponseInterface } from '../modules/tablelist/types/getTablelistResponse.interface'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'

export interface AppStateInterface {
  createCustomer: CustomerInputInterface,
  createBanner: BannerInputInterface,
  createDoctor: DoctorInputInterface,
  editCustomer: EditCustomerStateInterface,

  EditDoctor: EditDoctorStateInterface,
  GetTablelist: GetTablelistResponseInterface,
  EditBanner: EditBannerStateInterface,
  auth: AuthStateInterface,
  createUser: UserInputInterface,
  editUser:EditUserStateInterface,
}
