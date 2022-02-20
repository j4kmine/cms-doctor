import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {LanguageInputInterface} from '../../shared/types/languageInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class CreateLanguageService {
  constructor(private http: HttpClient) {}

  createLanguage(
    languageInput: LanguageInputInterface
  ): Observable<any> {
    const fullUrl = environment.apiUrl + '/language/create'
    return this.http
      .post<any>(fullUrl, languageInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
