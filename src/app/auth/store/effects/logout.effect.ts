import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {logoutAction} from 'src/app/auth/store/actions/sync.action'
import {tap} from 'rxjs/operators'
import {PersistanceService} from '../../../admin/shared/services/persistance.service'
import {Router} from '@angular/router'

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
       
          this.persistanceService.set('accessToken', '')
          this.router.navigateByUrl('auth/login')
        })
      ),
    {dispatch: false}
  )
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
