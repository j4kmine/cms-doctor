import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {TablelistService} from '../../services/tablelist.service'
import {
  getTablelistAction,
  getTablelistSuccessAction,
  getTablelistFailureAction
} from '../actions/getTablelist.action'
import {GetTablelistResponseInterface} from '../../types/getTablelistResponse.interface'

@Injectable()
export class GetTablelistEffect {
  getTablelist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTablelistAction),
      switchMap(({url}) => {
        return this.tablelistService.getTablelist(url).pipe(
          map((results: GetTablelistResponseInterface) => {
            return getTablelistSuccessAction({results})
          }),

          catchError(() => {
            return of(getTablelistFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private tablelistService: TablelistService) {}
}
