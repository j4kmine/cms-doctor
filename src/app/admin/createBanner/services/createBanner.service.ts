import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {BannerInputInterface} from '../../shared/types/bannerInput.interface'
import { environment } from 'src/environments/environment'


@Injectable()
export class CreateBannerService {
  constructor(private http: HttpClient) {}

  createBanner(
    BannerInput: BannerInputInterface
  ): Observable<any> {
    const fullUrl = environment.apiUrl + '/banner/create'
    return this.http
      .post<any>(fullUrl, BannerInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
