import {Component, OnInit} from '@angular/core'
import {CustomerInputInterface} from '../../shared/types/customerInput.interface'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createCustomerAction} from '../store/actions/createCustomer.action'

@Component({
  selector: 'mc-create-customer',
  templateUrl: './createCustomer.component.html',
  styleUrls: ['./createCustomer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  initialValues: CustomerInputInterface = {
    customername: '',
    address: '',
    dob: '',
    phonenumber: '',
    email: '',
    sex: '',
    tpayid: '',
    weight: '',
    height: ''
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(customerInput: CustomerInputInterface): void {
 
    this.store.dispatch(createCustomerAction({customerInput}))
  }
}
