import {DoctorInputInterface} from '../../shared/types/doctorInput.interfce'

export interface EditDoctorStateInterface {
  isSubmitting: boolean,
  doctor: DoctorInputInterface | null,
  isloading: boolean | false
}
