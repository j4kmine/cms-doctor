import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { DoctorInputInterface } from '../../../shared/types/doctorInput.interfce'
import {DoctorService as SharedDoctorService} from '../../../shared/services/doctor.service'
import {
  getDoctorAction,
  getDoctorSuccessAction,
  getDoctorFailureAction
} from '../actions/getDoctor.action'

@Injectable()
export class GetDoctorEffect {
  getDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDoctorAction),
      switchMap(({ id }) => {
        
        return this.sharedDoctorService.getDoctor(id).pipe(
          map((doctor: DoctorInputInterface) => {
            
            return getDoctorSuccessAction({doctor})
          }),

          catchError(() => {
            
            return of(getDoctorFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedDoctorService: SharedDoctorService,
    private router: Router
  ) {}
}
