import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {DoctorInputInterface} from '../../shared/types/doctorInput.interfce'
import { environment } from 'src/environments/environment'


@Injectable()
export class CreateDoctorService {
  constructor(private http: HttpClient) {}

  createDoctor(
    DoctorInput: DoctorInputInterface
  ): Observable<any> {
    const fullUrl = environment.apiUrl + '/doctor/create'
    return this.http
      .post<any>(fullUrl, DoctorInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
