import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {UserInputInterface} from '../types/userInput.interface'


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<UserInputInterface> {

    const fullUrl = `${environment.apiUrl}/user/getuser/${id}`
    return this.http.get<UserInputInterface>(fullUrl).pipe(
      map((response: UserInputInterface) => {
        return response
      })
    )
  }
}
