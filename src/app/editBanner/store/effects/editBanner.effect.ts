import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editBannerService} from '../../services/editBanner.service'
import {
  editBannerAction,
  editBannerFailureAction,
  editBannerSuccessAction
} from '../actions/editBanner.action'


@Injectable()
export class EditBannerEffect {
  EditBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editBannerAction),
      switchMap(({id,bannerInput}) => {
        return this.editBannerService.EditBanner(id,bannerInput).pipe(
          map((banner: any) => {
            
            return editBannerSuccessAction({banner})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editBannerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editBannerSuccessAction),
        tap(({banner}) => {
          this.router.navigate(['/banner/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editBannerService: editBannerService,
    private router: Router
  ) {}
}
