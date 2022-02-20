import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {UserInputInterface} from '../../shared/types/userInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class editUserService {
  constructor(private http: HttpClient) {}

  editUser(
    id: number,
    customerInput: UserInputInterface
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
