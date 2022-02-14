import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {CurrentUserInterface} from '../../admin/shared/types/currentUser.interface'
import {environment} from 'src/environments/environment'
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface'
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface'
import {CurrentUserInputInterface} from '../../admin/shared/types/currentUserInput.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }


  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrlauth + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrlauth + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(
    data: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrlauth + '/user'
    return this.http.put(url, data).pipe(map(this.getUser))
  }
}
