import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateBannerComponent } from './componenets/createBanner.component'
import { CreateBannerService } from './services/createBanner.service'
import { BannerFormModule } from '../shared/modules/bannerform/bannerform.module'
import { reducers } from './store/reducers'
import {CreateBannerEffect} from './store/effects/createBanner.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: 'banner/new',
    component: CreateBannerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerFormModule,
    EffectsModule.forFeature([CreateBannerEffect]),
    StoreModule.forFeature('createBanner', reducers)
  ],
  declarations: [CreateBannerComponent],
  providers: [CreateBannerService]
})
export class CreateBannerModule {}
