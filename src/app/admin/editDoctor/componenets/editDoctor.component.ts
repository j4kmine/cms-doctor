import {Component, OnInit} from '@angular/core'
import {DoctorInputInterface} from '../../shared/types/doctorInput.interfce'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  doctorSelector
} from '../store/selectors'
import {editDoctorAction} from '../store/actions/editDoctor.action'
import {getDoctorAction} from '../store/actions/getDoctor.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-doctor',
  templateUrl: './EditDoctor.component.html',
  styleUrls: ['./EditDoctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  initialValues$: Observable<DoctorInputInterface>
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
      select(doctorSelector),
      filter(Boolean),
      map((doctor: DoctorInputInterface) => {
        return {
          doctorname: doctor.doctorname,
          nip: doctor.nip,
          education: doctor.education,
          level: doctor.level,
          address: doctor.level,
          msisdn: doctor.msisdn,
          email: doctor.email,
          tpayid: doctor.tpayid,
          idcategory: doctor.idcategory,
          ispromo: doctor.ispromo,
          doctorfee: doctor.doctorfee,
          promopercent: doctor.promopercent,
          doctorfeepromo: doctor.doctorfeepromo,
          margintype: doctor.margintype,
          percenttpay: doctor.percenttpay,
          feetpay: doctor.feetpay,
          categoryname: doctor.categoryname,
          imgprofile: doctor.imgprofile,
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getDoctorAction({id: this.id}))
  }
  onSubmit(doctorInput: DoctorInputInterface): void {
 
    this.store.dispatch(editDoctorAction({id:this.id, doctorInput}))
  }
}
