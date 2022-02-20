import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {LanguageInputInterface} from '../types/languageInput.interface'


@Injectable()
export class LanguageService {
 
  constructor(private http: HttpClient) {}

  getLanguage(id: number): Observable<LanguageInputInterface> {

    const fullUrl = `${environment.apiUrl}/language/getlanguage/${id}`
    return this.http.get<LanguageInputInterface>(fullUrl).pipe(
      map((response: LanguageInputInterface) => {
        return response
      })
    )
  }
}
