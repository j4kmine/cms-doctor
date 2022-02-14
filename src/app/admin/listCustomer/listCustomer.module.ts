import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {listCustomerComponent} from 'src/app/admin/listCustomer/components/listCustomer/listCustomer.component'
import {TablelistModule} from '../shared/modules/tablelist/tablelist.module'


const routes = [
  {
    path: '',
    component: listCustomerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TablelistModule,
  ],
  declarations: [listCustomerComponent]
})
export class listCustomerModule {}
