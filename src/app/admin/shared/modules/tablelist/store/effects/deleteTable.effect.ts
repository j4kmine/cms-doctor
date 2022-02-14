import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {of} from 'rxjs'

import {TablelistService} from '../../services/tablelist.service'
import {
  deleteTablelistAction,
  deleteTablelistSuccessAction,
  deleteTablelistFailureAction
} from '../actions/getTablelist.action'
import {Router} from '@angular/router'
var url = "";
@Injectable()

export class DeleteTableEffect {

  deleteTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTablelistAction),
      switchMap(({ fullurl }) => {
        url= fullurl;
        return this.tablelistService.deleteTablelist(fullurl).pipe(
          map(() => {
           
            return deleteTablelistSuccessAction()
          }),

          catchError(() => {
            return of(deleteTablelistFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteTablelistSuccessAction),
        tap(() => {
          window.location.reload();
    
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private tablelistService: TablelistService,
    private router: Router
  ) {}
}
