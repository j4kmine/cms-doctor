import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { CustomerInputInterface } from '../../../shared/types/customerInput.interface'
import {CustomerService as SharedCustomerService} from '../../../shared/services/customer.service'
import {
  getCustomerAction,
  getCustomerSuccessAction,
  getCustomerFailureAction
} from '../actions/getCustomer.action'

@Injectable()
export class GetCustomerEffect {
  getCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCustomerAction),
      switchMap(({ id }) => {
        
        return this.sharedCustomerService.getCustomer(id).pipe(
          map((customer: CustomerInputInterface) => {
            
            return getCustomerSuccessAction({customer})
          }),

          catchError(() => {
            
            return of(getCustomerFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedCustomerService: SharedCustomerService,
    private router: Router
  ) {}
}
