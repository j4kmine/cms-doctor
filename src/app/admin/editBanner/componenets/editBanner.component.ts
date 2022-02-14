import {Component, OnInit} from '@angular/core'
import {BannerInputInterface} from '../../shared/types/bannerInput.interface'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  bannerSelector
} from '../store/selectors'
import {editBannerAction} from '../store/actions/editBanner.action'
import {getBannerAction} from '../store/actions/getBanner.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-banner',
  templateUrl: './EditBanner.component.html',
  styleUrls: ['./EditBanner.component.scss']
})
export class EditBannerComponent implements OnInit {
  initialValues$: Observable<BannerInputInterface>
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
      select(bannerSelector),
      filter(Boolean),
      map((banner: BannerInputInterface) => {
        return {
          category: banner.category,
          title_ID: banner.title_ID,
          subtitle_ID: banner.subtitle_ID,
          title_US: banner.title_US,
          subtitle_US: banner.subtitle_US,
          title_TL: banner.title_TL,
          subtitle_TL: banner.subtitle_TL,
          imageurl: banner.imageurl,
          imagelaunchurl:banner.imagelaunchurl
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getBannerAction({id: this.id}))
  }
  onSubmit(bannerInput: BannerInputInterface): void {
 
    this.store.dispatch(editBannerAction({id:this.id, bannerInput}))
  }
}
