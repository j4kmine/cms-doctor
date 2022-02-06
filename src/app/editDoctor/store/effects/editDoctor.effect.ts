import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editDoctorService} from '../../services/editDoctor.service'
import {
  editDoctorAction,
  editDoctorFailureAction,
  editDoctorSuccessAction
} from '../actions/editDoctor.action'


@Injectable()
export class EditDoctorEffect {
  EditDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editDoctorAction),
      switchMap(({id,doctorInput}) => {
        return this.editDoctorService.EditDoctor(id,doctorInput).pipe(
          map((doctor: any) => {
            
            return editDoctorSuccessAction({doctor})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editDoctorFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editDoctorSuccessAction),
        tap(({doctor}) => {
          this.router.navigate(['/doctor/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editDoctorService: editDoctorService,
    private router: Router
  ) {}
}
