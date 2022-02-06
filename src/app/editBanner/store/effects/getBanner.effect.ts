import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { BannerInputInterface } from '../../../shared/types/bannerInput.interface'
import {BannerService as SharedBannerService} from '../../../shared/services/banner.service'
import {
  getBannerAction,
  getBannerSuccessAction,
  getBannerFailureAction
} from '../actions/getBanner.action'

@Injectable()
export class GetBannerEffect {
  getBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBannerAction),
      switchMap(({ id }) => {
        
        return this.sharedBannerService.getBanner(id).pipe(
          map((banner: BannerInputInterface) => {
            
            return getBannerSuccessAction({banner})
          }),

          catchError(() => {
            
            return of(getBannerFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedBannerService: SharedBannerService,
    private router: Router
  ) {}
}
