import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {BannerformComponent} from './components/bannerform.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  declarations: [BannerformComponent],
  exports: [BannerformComponent]
})
export class BannerFormModule {}