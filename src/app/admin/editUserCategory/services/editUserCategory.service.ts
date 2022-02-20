import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {UserCategoryInputInterface} from '../../shared/types/usercategoryInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class editUserCategoryService {
  constructor(private http: HttpClient) {}

  editUserCategory(
    id: number,
    customerInput: UserCategoryInputInterface
  ): Observable<any> {
  
    const fullUrl = `${environment.apiUrl}/usercategory/update/${id}`
    return this.http
      .post<any>(fullUrl, customerInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
