import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editCustomerService} from '../../services/editCustomer.service'
import {
  editCustomerAction,
  editCustomerFailureAction,
  editCustomerSuccessAction
} from '../actions/editCustomer.action'


@Injectable()
export class EditCustomerEffect {
  editCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCustomerAction),
      switchMap(({id,customerInput}) => {
        return this.editCustomerService.editCustomer(id,customerInput).pipe(
          map((customer: any) => {
            
            return editCustomerSuccessAction({customer})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editCustomerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editCustomerSuccessAction),
        tap(({customer}) => {
          this.router.navigate(['/customer/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editCustomerService: editCustomerService,
    private router: Router
  ) {}
}
