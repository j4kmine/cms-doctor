import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {GetTablelistResponseInterface} from 'src/app/shared/modules/tablelist/types/getTablelistResponse.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'

@Injectable()
export class TablelistService {
  constructor(private http: HttpClient) {}

  getTablelist(url: string): Observable<GetTablelistResponseInterface> {
    const fullUrl = environment.apiUrl +"/"+ url
  
    return this.http.get<GetTablelistResponseInterface>(fullUrl)
  }
}
