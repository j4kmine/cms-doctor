import {Component, OnInit} from '@angular/core'
import {LanguageInputInterface} from '../../shared/types/languageInput.interface'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createLanguageAction} from '../store/actions/createLanguage.action'

@Component({
  selector: 'mc-create-language',
  templateUrl: './createLanguage.component.html',
  styleUrls: ['./createLanguage.component.scss']
})
export class CreateLanguageComponent implements OnInit {
  initialValues: LanguageInputInterface = {
    prefixlang: '',
    lang: '',
    langdesc: '',
    localeindex: '',
 
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(languageInput: LanguageInputInterface): void {
 
    this.store.dispatch(createLanguageAction({languageInput}))
  }
}
