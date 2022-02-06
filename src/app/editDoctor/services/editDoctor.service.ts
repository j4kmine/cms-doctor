import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {DoctorInputInterface} from '../../shared/types/doctorInput.interfce'
import { environment } from 'src/environments/environment'


@Injectable()
export class editDoctorService {
  constructor(private http: HttpClient) {}

  EditDoctor(
    id: number,
    doctorInput: DoctorInputInterface
  ): Observable<any> {
  
    const fullUrl = `${environment.apiUrl}/doctor/update/${id}`
    return this.http
      .post<any>(fullUrl, doctorInput)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }
}
