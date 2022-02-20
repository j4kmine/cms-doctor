import {CustomerInputInterface} from '../types/customerInput.interface'
import {BannerInputInterface} from '../types/bannerInput.interface'
import { DoctorInputInterface } from '../types/doctorInput.interfce'
import { UserInputInterface } from '../types/userInput.interface'
import { LanguageInputInterface } from '../types/languageInput.interface'
import { EditLanguageStateInterface } from '../../editLanguage/types/editLanguageState.interface'
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
  createLanguage:LanguageInputInterface,
  EditDoctor: EditDoctorStateInterface,
  GetTablelist: GetTablelistResponseInterface,
  editLanguage:EditLanguageStateInterface,
  EditBanner: EditBannerStateInterface,
  auth: AuthStateInterface,
  createUser: UserInputInterface,
  editUser:EditUserStateInterface,
}
