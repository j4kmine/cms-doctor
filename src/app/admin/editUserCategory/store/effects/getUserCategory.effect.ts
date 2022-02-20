import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { UserCategoryInputInterface } from '../../../shared/types/usercategoryInput.interface'
import {UserCategoryService as SharedUserCategoryService} from '../../../shared/services/usercategory.service'
import {
  getUserCategoryAction,
  getUserCategorySuccessAction,
  getUserCategoryFailureAction
} from '../actions/getUserCategory.action'

@Injectable()
export class GetUserCategoryEffect {
  getUserCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserCategoryAction),
      switchMap(({ id }) => {
        
        return this.sharedUserCategoryService.getUserCategory(id).pipe(
          map((usercategory: UserCategoryInputInterface) => {
            
            return getUserCategorySuccessAction({usercategory})
          }),

          catchError(() => {
            
            return of(getUserCategoryFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedUserCategoryService: SharedUserCategoryService,
    private router: Router
  ) {}
}
