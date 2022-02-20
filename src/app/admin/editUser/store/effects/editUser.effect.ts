import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editUserService} from '../../services/editUser.service'
import {
  editUserAction,
  editUserFailureAction,
  editUserSuccessAction
} from '../actions/editUser.action'


@Injectable()
export class EditUserEffect {
  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUserAction),
      switchMap(({id,userInput}) => {
        return this.editUserService.editUser(id,userInput).pipe(
          map((user: any) => {
            
            return editUserSuccessAction({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editUserFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editUserSuccessAction),
        tap(({user}) => {
          this.router.navigate(['/listuser', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editUserService: editUserService,
    private router: Router
  ) {}
}
