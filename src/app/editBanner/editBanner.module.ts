import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditBannerComponent } from './componenets/editBanner.component'
import { editBannerService } from './services/editBanner.service'
import { BannerService } from '../shared/services/banner.service'
import { BannerFormModule } from '../shared/modules/bannerform/bannerform.module'
import { reducers } from './store/reducers'
import { EditBannerEffect } from './store/effects/editBanner.effect'
import {GetBannerEffect } from './store/effects/getBanner.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: 'banner/:id/edit',
    component: EditBannerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerFormModule,
    EffectsModule.forFeature([EditBannerEffect,GetBannerEffect]),
    StoreModule.forFeature('EditBanner', reducers)
  ],
  declarations: [EditBannerComponent],
  providers: [editBannerService,BannerService,DatePipe]
})
export class EditBannerModule {}
