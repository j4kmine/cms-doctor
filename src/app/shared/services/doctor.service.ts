import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {DoctorInputInterface} from '../types/doctorInput.interfce'


@Injectable()
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctor(id: number): Observable<DoctorInputInterface> {

    const fullUrl = `${environment.apiUrl}/doctor/getdoctor/${id}`
    return this.http.get<DoctorInputInterface>(fullUrl).pipe(
      map((response: DoctorInputInterface) => {
        return response
      })
    )
  }
}
