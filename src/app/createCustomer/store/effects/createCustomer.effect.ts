import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {CustomerInputInterface} from '../../../shared/types/customerInput.interface'
import {CreateCustomerService} from '../../services/createCustomer.service'
import {
  createCustomerAction,
  createCustomerFailureAction,
  createCustomerSuccessAction
} from '../actions/createCustomer.action'


@Injectable()
export class CreateCustomerEffect {
  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCustomerAction),
      switchMap(({customerInput}) => {
        return this.createCustomerService.createCustomer(customerInput).pipe(
          map((customer: any) => {
            return createCustomerSuccessAction({customer})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createCustomerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createCustomerSuccessAction),
        tap(({customer}) => {
          this.router.navigate(['/customer/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createCustomerService: CreateCustomerService,
    private router: Router
  ) {}
}
