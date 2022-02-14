import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { CustomerInputInterface } from '../../../types/customerInput.interface'
import {FormGroup, FormBuilder} from '@angular/forms'
declare var $: any;
@Component({
  selector: 'mc-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit,AfterViewInit {
  @Input('initialValues') initialValuesProps: CustomerInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('customerSubmit') customerSubmitEvent = new EventEmitter<
  CustomerInputInterface
>()

form: FormGroup

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
  
  this.form = this.fb.group({
    customername: this.initialValuesProps.customername,
    email: this.initialValuesProps.email,
    phonenumber: this.initialValuesProps.phonenumber,
    dob: this.initialValuesProps.dob,
    height: this.initialValuesProps.height,
    weight: this.initialValuesProps.weight,
    sex: this.initialValuesProps.sex,
    tpayid: this.initialValuesProps.tpayid,
    address: this.initialValuesProps.address,
  })
 
}

onSubmit(): void {
  this.customerSubmitEvent.emit(this.form.value)
}
  ngAfterViewInit(): void {
    $(document).ready(function(){
      $( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
    });
  }

 

}
