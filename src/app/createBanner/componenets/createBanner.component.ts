import {Component, OnInit} from '@angular/core'
import {BannerInputInterface} from '../../shared/types/bannerInput.interface'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createBannerAction} from '../store/actions/createBanner.action'

@Component({
  selector: 'mc-create-banner',
  templateUrl: './createBanner.component.html',
  styleUrls: ['./createBanner.component.scss']
})
export class CreateBannerComponent implements OnInit {
  initialValues: BannerInputInterface = {
    category: '',
    title_ID: '',
    subtitle_ID: '',
    title_US: '',
    subtitle_US: '',
    title_TL: '',
    subtitle_TL: '',
    imageurl: '',
    imagelaunchurl:''
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(BannerInput: BannerInputInterface): void {
 
    this.store.dispatch(createBannerAction({BannerInput}))
  }
}
