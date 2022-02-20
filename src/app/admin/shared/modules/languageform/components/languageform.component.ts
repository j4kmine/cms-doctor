import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { LanguageInputInterface } from '../../../types/languageInput.interface'
import {FormGroup, FormBuilder} from '@angular/forms'
declare var $: any;
@Component({
  selector: 'mc-languageform',
  templateUrl: './languageform.component.html',
  styleUrls: ['./languageform.component.css']
})
export class LanguageformComponent implements OnInit {
  @Input('initialValues') initialValuesProps: LanguageInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('languageSubmit') languageSubmitEvent = new EventEmitter<
  LanguageInputInterface
>()

form: FormGroup

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
  
  this.form = this.fb.group({
    prefixlang: this.initialValuesProps.prefixlang,
    lang: this.initialValuesProps.lang,
    langdesc: this.initialValuesProps.langdesc,
    localeindex: this.initialValuesProps.localeindex,
  })
 
}

onSubmit(): void {
  this.languageSubmitEvent.emit(this.form.value)
}


 

}
