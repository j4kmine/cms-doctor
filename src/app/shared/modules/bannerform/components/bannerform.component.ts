import { Component, OnInit, AfterViewInit ,Input, Output, EventEmitter, } from '@angular/core';
import { BannerInputInterface } from '../../../types/bannerInput.interface'
import {FormGroup, FormBuilder} from '@angular/forms'
declare var $: any;
@Component({
  selector: 'mc-bannerform',
  templateUrl: './bannerform.component.html',
  styleUrls: ['./bannerform.component.css']
})
export class BannerformComponent implements OnInit,AfterViewInit {
  @Input('initialValues') initialValuesProps: BannerInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean

  @Output('bannerSubmit') bannerSubmitEvent = new EventEmitter<
  BannerInputInterface
>()

form: FormGroup
 imageSrc: string = '';
constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.initializeForm()
}

  initializeForm(): void {
    if (this.initialValuesProps.imageurl && this.initialValuesProps.imageurl != "") {
      this.imageSrc = this.initialValuesProps.imageurl;
    }
  this.form = this.fb.group({
    category: this.initialValuesProps.category,
    title_ID: this.initialValuesProps.title_ID,
    subtitle_ID: this.initialValuesProps.subtitle_ID,
    title_US: this.initialValuesProps.title_US,
    subtitle_US: this.initialValuesProps.subtitle_US,
    title_TL: this.initialValuesProps.title_TL,
    subtitle_TL: this.initialValuesProps.subtitle_TL,
    imagelaunchurl: this.initialValuesProps.imagelaunchurl,
    imageurl: '',
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
    imageurl:this.imageSrc
  })

}
onSubmit(): void {
  this.bannerSubmitEvent.emit(this.form.value)
}
  ngAfterViewInit(): void {
   
  }

 

}
