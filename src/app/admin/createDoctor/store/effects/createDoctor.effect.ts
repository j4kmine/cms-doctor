import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {DoctorInputInterface} from '../../../shared/types/doctorInput.interfce'
import {CreateDoctorService} from '../../services/createDoctor.service'
import {
  createDoctorAction,
  createDoctorFailureAction,
  createDoctorSuccessAction
} from '../actions/createDoctor.action'


@Injectable()
export class CreateDoctorEffect {
  createDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDoctorAction),
      switchMap(({DoctorInput}) => {
        return this.createDoctorService.createDoctor(DoctorInput).pipe(
          map((Doctor: any) => {
            return createDoctorSuccessAction({Doctor})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createDoctorFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createDoctorSuccessAction),
        tap(({Doctor}) => {
          this.router.navigate(['/Doctor/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createDoctorService: CreateDoctorService,
    private router: Router
  ) {}
}
