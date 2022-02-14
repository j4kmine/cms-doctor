import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {BannerInputInterface} from '../../../shared/types/BannerInput.interface'
import {CreateBannerService} from '../../services/createBanner.service'
import {
  createBannerAction,
  createBannerFailureAction,
  createBannerSuccessAction
} from '../actions/createBanner.action'


@Injectable()
export class CreateBannerEffect {
  createBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBannerAction),
      switchMap(({BannerInput}) => {
        return this.createBannerService.createBanner(BannerInput).pipe(
          map((Banner: any) => {
            return createBannerSuccessAction({Banner})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createBannerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createBannerSuccessAction),
        tap(({Banner}) => {
          this.router.navigate(['/Banner/new', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createBannerService: CreateBannerService,
    private router: Router
  ) {}
}
