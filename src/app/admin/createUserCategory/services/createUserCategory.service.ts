import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {UserCategoryInputInterface} from '../../shared/types/usercategoryInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class CreateUserCategoryService {
  constructor(private http: HttpClient) {}

  createUserCategory(
    usercategoryInput: UserCategoryInputInterface
  ): Observable<any> {
    const fullUrl = environment.apiUrl + '/usercategory/create'
    return this.http
      .post<any>(fullUrl, usercategoryInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
