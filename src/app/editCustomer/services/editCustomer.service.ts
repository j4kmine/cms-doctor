import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {CustomerInputInterface} from '../../shared/types/customerInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class editCustomerService {
  constructor(private http: HttpClient) {}

  editCustomer(
    id: number,
    customerInput: CustomerInputInterface
  ): Observable<any> {
  
    const fullUrl = `${environment.apiUrl}/customer/update/${id}`
    return this.http
      .post<any>(fullUrl, customerInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
