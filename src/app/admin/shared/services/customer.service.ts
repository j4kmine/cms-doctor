import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {CustomerInputInterface} from '../types/customerInput.interface'


@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomer(id: number): Observable<CustomerInputInterface> {

    const fullUrl = `${environment.apiUrl}/customer/getcustomer/${id}`
    return this.http.get<CustomerInputInterface>(fullUrl).pipe(
      map((response: CustomerInputInterface) => {
        return response
      })
    )
  }
}
