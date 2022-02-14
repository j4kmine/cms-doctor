import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {BannerInputInterface} from '../types/bannerInput.interface'


@Injectable()
export class BannerService {
  constructor(private http: HttpClient) {}

  getBanner(id: number): Observable<BannerInputInterface> {

    const fullUrl = `${environment.apiUrl}/banner/getbanner/${id}`
    return this.http.get<BannerInputInterface>(fullUrl).pipe(
      map((response: BannerInputInterface) => {
        return response
      })
    )
  }
}
