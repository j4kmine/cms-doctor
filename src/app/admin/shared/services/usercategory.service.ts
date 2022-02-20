import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {UserCategoryInputInterface} from '../types/userCategoryInput.interface'


@Injectable()
export class UserCategoryService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<UserCategoryInputInterface> {

    const fullUrl = `${environment.apiUrl}/usercategory/getusercategory/${id}`
    return this.http.get<UserCategoryInputInterface>(fullUrl).pipe(
      map((response: UserCategoryInputInterface) => {
        return response
      })
    )
  }
}
