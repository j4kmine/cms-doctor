import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {BannerInputInterface} from '../../shared/types/bannerInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class editBannerService {
  constructor(private http: HttpClient) {}

  EditBanner(
    id: number,
    bannerInput: BannerInputInterface
  ): Observable<any> {
  
    const fullUrl = `${environment.apiUrl}/banner/update/${id}`
    return this.http
      .post<any>(fullUrl, bannerInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
