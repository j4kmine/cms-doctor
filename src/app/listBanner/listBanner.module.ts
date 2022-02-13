import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {listBannerComponent} from 'src/app/listBanner/components/listBanner/listBanner.component'
import {TablelistModule} from '../shared/modules/tablelist/tablelist.module'


const routes = [
  {
    path: 'listbanner',
    component: listBannerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TablelistModule,
  ],
  declarations: [listBannerComponent]
})
export class listBannerModule {}
