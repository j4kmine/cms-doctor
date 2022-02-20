import {Component, OnInit} from '@angular/core'
import {LanguageInputInterface} from '../../shared/types/languageInput.interface'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  languageSelector
} from '../store/selectors'
import {editLanguageAction} from '../store/actions/editLanguage.action'
import {getLanguageAction} from '../store/actions/getLanguage.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-customer',
  templateUrl: './editLanguage.component.html',
  styleUrls: ['./editLanguage.component.scss']
})
export class EditLanguageComponent implements OnInit {
  initialValues$: Observable<LanguageInputInterface>
  isSubmitting$: Observable<boolean>
  id: number
 

  constructor(private store: Store,private route: ActivatedRoute,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()
   
  }
  initialValues(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
 
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.initialValues$ = this.store.pipe(
      select(languageSelector),
      filter(Boolean),
      map((language: LanguageInputInterface) => {
        return {
          prefixlang: language.prefixlang,
          lang: language.lang,
          langdesc: language.langdesc,
          localeindex: language.localeindex,
       
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getLanguageAction({id: this.id}))
  }
  onSubmit(languageInput: LanguageInputInterface): void {
 
    this.store.dispatch(editLanguageAction({id:this.id, languageInput}))
  }
}
