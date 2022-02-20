import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { UserCategoryInputInterface } from '../../../types/userCategoryInput.interface'
import {FormGroup, FormBuilder} from '@angular/forms'
declare var $: any;
@Component({
  selector: 'mc-usercategoryform',
  templateUrl: './usercategoryform.component.html',
  styleUrls: ['./usercategoryform.component.css']
})
export class UserCategoryformComponent implements OnInit {
  @Input('initialValues') initialValuesProps: UserCategoryInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('UsercategorySubmit') UsercategorySubmitEvent = new EventEmitter<
  UserCategoryInputInterface
>()

form: FormGroup

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
  
  this.form = this.fb.group({
    usercategory: this.initialValuesProps.usercategory,
    homescreen: this.initialValuesProps.homescreen
  })
 
}

onSubmit(): void {
  this.UsercategorySubmitEvent.emit(this.form.value)
}


 

}
