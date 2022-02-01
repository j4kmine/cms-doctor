import {Component, OnInit} from '@angular/core'
import {DoctorInputInterface} from '../../shared/types/doctorInput.interfce'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createDoctorAction} from '../store/actions/createDoctor.action'

@Component({
  selector: 'mc-create-banner',
  templateUrl: './createDoctor.component.html',
  styleUrls: ['./createDoctor.component.scss']
})
export class CreateDoctorComponent implements OnInit {
  initialValues: DoctorInputInterface = {
    doctorname: '',
    education: '',
    level: '',
    address: '',
    msisdn: '',
    email: '',
    tpayid: '',
    idcategory: '',
    is_promo: false,
    doctorfee: '',
    promopercent: '',
    doctorfeepromo: '',
    magrintype: '',
    percenttpay: '',
    feetpay: '',
    categoryname: '',
    image: ''
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(DoctorInput: DoctorInputInterface): void {
 
    this.store.dispatch(createDoctorAction({DoctorInput}))
  }
}
