import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {LanguageInputInterface} from '../../../shared/types/languageInput.interface'
import {CreateLanguageService} from '../../services/createLanguage.service'
import {
  createLanguageAction,
  createLanguageFailureAction,
  createLanguageSuccessAction
} from '../actions/createLanguage.action'


@Injectable()
export class CreateLanguageEffect {
  createLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLanguageAction),
      switchMap(({languageInput}) => {
        return this.createLanguageService.createLanguage(languageInput).pipe(
          map((language: any) => {
            return createLanguageSuccessAction({language})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createLanguageFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createLanguageSuccessAction),
        tap(({language}) => {
          this.router.navigate(['admin/listlanguage', {}])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createLanguageService: CreateLanguageService,
    private router: Router
  ) {}
}
