import {CustomerInputInterface} from '../../../../shared/types/customerInput.interface'
import {PaginationInterface} from '../../../../shared/types/pagination.interface'
export interface GetTablelistResponseInterface {
  results: CustomerInputInterface[]
  pagination: PaginationInterface
}
