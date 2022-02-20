import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {editLanguageService} from '../../services/editLanguage.service'
import {
  editLanguageAction,
  editLanguageFailureAction,
  editLanguageSuccessAction
} from '../actions/editLanguage.action'


@Injectable()
export class EditLanguageEffect {
  editLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editLanguageAction),
      switchMap(({id,languageInput}) => {
        return this.editLanguageService.editLanguage(id,languageInput).pipe(
          map((language: any) => {
            
            return editLanguageSuccessAction({language})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editLanguageFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editLanguageSuccessAction),
        tap(({language}) => {
          this.router.navigate(['admin/listlanguage', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private editLanguageService: editLanguageService,
    private router: Router
  ) {}
}
