import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {UserInputInterface} from '../../shared/types/userInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class CreateUserService {
  constructor(private http: HttpClient) {}

  createUser(
    userInput: UserInputInterface
  ): Observable<any> {
    const fullUrl = environment.apiUrl + '/user/create'
    return this.http
      .post<any>(fullUrl, userInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
