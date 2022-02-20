import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {listUserCategoryComponent} from 'src/app/admin/listUserCategory/components/listUserCategory/listUserCategory.component'
import {TablelistModule} from '../shared/modules/tablelist/tablelist.module'


const routes = [
  {
    path: '',
    component: listUserCategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TablelistModule,
  ],
  declarations: [listUserCategoryComponent]
})
export class listUserCategoryModule {}
