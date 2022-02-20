import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { UserInputInterface } from '../../../types/userInput.interface'
import {FormGroup, FormBuilder} from '@angular/forms'
declare var $: any;
@Component({
  selector: 'mc-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  @Input('initialValues') initialValuesProps: UserInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('adminSubmit') adminSubmitEvent = new EventEmitter<
  UserInputInterface
>()

form: FormGroup

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
  
  this.form = this.fb.group({
    username: this.initialValuesProps.username,
    email: this.initialValuesProps.email,
    password: this.initialValuesProps.password,
  })
 
}

onSubmit(): void {
  this.adminSubmitEvent.emit(this.form.value)
}


 

}
