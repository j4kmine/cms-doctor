import {Component, OnInit} from '@angular/core'
import {CustomerInputInterface} from '../../shared/types/customerInput.interface'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  customerSelector
} from '../store/selectors'
import {editCustomerAction} from '../store/actions/editCustomer.action'
import {getCustomerAction} from '../store/actions/getCustomer.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-customer',
  templateUrl: './editCustomer.component.html',
  styleUrls: ['./editCustomer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  initialValues$: Observable<CustomerInputInterface>
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
      select(customerSelector),
      filter(Boolean),
      map((customer: CustomerInputInterface) => {
        return {
          customername: customer.customername,
          address: customer.address,
          dob: this.datePipe.transform(customer.dob,"yyyy-MM-dd"),
          phonenumber: customer.phonenumber,
          email: customer.email,
          sex: customer.sex,
          tpayid: customer.tpayid,
          weight: customer.weight,
          height: customer.height
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getCustomerAction({id: this.id}))
  }
  onSubmit(customerInput: CustomerInputInterface): void {
 
    this.store.dispatch(editCustomerAction({id:this.id, customerInput}))
  }
}
