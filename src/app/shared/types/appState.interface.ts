import {CustomerInputInterface} from '../types/customerInput.interface'
import {BannerInputInterface} from '../types/bannerInput.interface'
import {DoctorInputInterface} from '../types/doctorInput.interfce'
export interface AppStateInterface {
  createCustomer: CustomerInputInterface,
  createBanner: BannerInputInterface,
  createDoctor: DoctorInputInterface
}
