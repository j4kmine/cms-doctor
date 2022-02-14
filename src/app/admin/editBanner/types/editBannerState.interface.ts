import {BannerInputInterface} from '../../shared/types/bannerInput.interface'

export interface EditBannerStateInterface {
  isSubmitting: boolean,
  banner: BannerInputInterface | null,
  isloading: boolean | false
}
