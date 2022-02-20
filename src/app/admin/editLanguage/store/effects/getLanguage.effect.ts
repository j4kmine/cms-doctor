import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import { LanguageInputInterface } from '../../../shared/types/languageInput.interface'
import {LanguageService as SharedLanguageService} from '../../../shared/services/language.service'
import {
  getLanguageAction,
  getLanguageSuccessAction,
  getLanguageFailureAction
} from '../actions/getLanguage.action'

@Injectable()
export class GetLanguageEffect {
  getLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguageAction),
      switchMap(({ id }) => {
        
        return this.sharedLanguageService.getLanguage(id).pipe(
          map((language: LanguageInputInterface) => {
            
            return getLanguageSuccessAction({language})
          }),

          catchError(() => {
            
            return of(getLanguageFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedLanguageService: SharedLanguageService,
    private router: Router
  ) {}
}
