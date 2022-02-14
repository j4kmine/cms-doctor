import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { DoctorInputInterface } from '../../../types/doctorInput.interfce'
import { FormGroup, FormBuilder } from '@angular/forms'
import {environment} from '../../../../../../environments/environment'
declare var $: any;
@Component({
  selector: 'mc-doctorform',
  templateUrl: './doctorform.component.html',
  styleUrls: ['./doctorform.component.css']
})
export class BannerformComponent implements OnInit,AfterViewInit {
  @Input('initialValues') initialValuesProps: DoctorInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('doctorSubmit') doctorSubmitEvent = new EventEmitter<
  DoctorInputInterface
>()

form: FormGroup
 imageSrc: string = '';
constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
    if (this.initialValuesProps.imgprofile && this.initialValuesProps.imgprofile != "") {
      this.imageSrc = `${environment.imageUrl}?route=doctor&name=${this.initialValuesProps.imgprofile.replace(/\s/g, '')}`;
    }
  this.form = this.fb.group({
    doctorname: this.initialValuesProps.doctorname,
    nip: this.initialValuesProps.nip,
    education: this.initialValuesProps.education,
    level: this.initialValuesProps.level,
    address: this.initialValuesProps.address,
    msisdn: this.initialValuesProps.msisdn,
    email: this.initialValuesProps.email,
    tpayid: this.initialValuesProps.tpayid,
    idcategory: this.initialValuesProps.idcategory,
    ispromo: this.initialValuesProps.ispromo,
    doctorfee: this.initialValuesProps.doctorfee,
    promopercent: this.initialValuesProps.promopercent,
    doctorfeepromo: this.initialValuesProps.doctorfeepromo,
    margintype: this.initialValuesProps.margintype,
    percenttpay: this.initialValuesProps.percenttpay,
    feetpay: this.initialValuesProps.feetpay,
    categoryname: this.initialValuesProps.categoryname,
    imgprofile: '',
    
  })
  
}
handleInputChange(e) {
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  var pattern = /image-*/;
  var reader = new FileReader();
  if (!file.type.match(pattern)) {
    alert('invalid format');
    return;
  }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  let reader = e.target;
  this.imageSrc = reader.result;
  this.form.patchValue({
    imgprofile:this.imageSrc
  })

}
onSubmit(): void {
  this.doctorSubmitEvent.emit(this.form.value)
}
  ngAfterViewInit(): void {
   
  }

 

}
