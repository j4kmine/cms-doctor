import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editUserCategoryService} from '../../services/editUserCategory.service'
import {
  editUserCategoryAction,
  editUserCategoryFailureAction,
  editUserCategorySuccessAction
} from '../actions/editUserCategory.action'


@Injectable()
export class EditUserCategoryEffect {
  editUserCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUserCategoryAction),
      switchMap(({id,usercategoryInput}) => {
        return this.editUserCategoryService.editUserCategory(id,usercategoryInput).pipe(
          map((usercategory: any) => {
            
            return editUserCategorySuccessAction({usercategory})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editUserCategoryFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editUserCategorySuccessAction),
        tap(({usercategory}) => {
          this.router.navigate(['admin/listusercategory', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editUserCategoryService: editUserCategoryService,
    private router: Router
  ) {}
}
