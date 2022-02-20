import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {UserCategoryInputInterface} from '../../../shared/types/usercategoryInput.interface'
import {CreateUserCategoryService} from '../../services/createUserCategory.service'
import {
  createUserCategoryAction,
  createUserCategoryFailureAction,
  createUserCategorySuccessAction
} from '../actions/createUserCategory.action'


@Injectable()
export class CreateUserCategoryEffect {
  createUserCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserCategoryAction),
      switchMap(({usercategoryInput}) => {
        return this.createUserCategoryService.createUserCategory(usercategoryInput).pipe(
          map((usercategory: any) => {
            return createUserCategorySuccessAction({usercategory})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createUserCategoryFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserCategorySuccessAction),
        tap(({usercategory}) => {
          this.router.navigate(['admin/listusercategory', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createUserCategoryService: CreateUserCategoryService,
    private router: Router
  ) {}
}
