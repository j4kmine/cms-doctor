import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {LanguageInputInterface} from '../../shared/types/languageInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class editLanguageService {
  constructor(private http: HttpClient) {}

  editLanguage(
    id: number,
    customerInput: LanguageInputInterface
  ): Observable<any> {
  
    const fullUrl = `${environment.apiUrl}/language/update/${id}`
    return this.http
      .post<any>(fullUrl, customerInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
