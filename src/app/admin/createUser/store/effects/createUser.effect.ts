import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {UserInputInterface} from '../../../shared/types/userInput.interface'
import {CreateUserService} from '../../services/createUser.service'
import {
  createUserAction,
  createUserFailureAction,
  createUserSuccessAction
} from '../actions/createUser.action'


@Injectable()
export class CreateUserEffect {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserAction),
      switchMap(({userInput}) => {
        return this.createUserService.createUser(userInput).pipe(
          map((user: any) => {
            return createUserSuccessAction({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createUserFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserSuccessAction),
        tap(({user}) => {
          this.router.navigate(['admin/listuser', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createUserService: CreateUserService,
    private router: Router
  ) {}
}
