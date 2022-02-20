import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { UserInputInterface } from '../../../shared/types/userInput.interface'
import {UserService as SharedUserService} from '../../../shared/services/user.service'
import {
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction
} from '../actions/getUser.action'

@Injectable()
export class GetUserEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      switchMap(({ id }) => {
        
        return this.sharedUserService.getUser(id).pipe(
          map((user: UserInputInterface) => {
            
            return getUserSuccessAction({user})
          }),

          catchError(() => {
            
            return of(getUserFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedUserService: SharedUserService,
    private router: Router
  ) {}
}
