import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditCustomerComponent } from './componenets/editCustomer.component'
import { editCustomerService } from './services/editCustomer.service'
import { CustomerService } from '../shared/services/customer.service'
import { UserFormModule } from '../shared/modules/userform/userform.module'
import { reducers } from './store/reducers'
import { EditCustomerEffect } from './store/effects/editCustomer.effect'
import {GetCustomerEffect } from './store/effects/getCustomer.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: 'customer/:id/edit',
    component: EditCustomerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserFormModule,
    EffectsModule.forFeature([EditCustomerEffect,GetCustomerEffect]),
    StoreModule.forFeature('editCustomer', reducers)
  ],
  declarations: [EditCustomerComponent],
  providers: [editCustomerService,CustomerService,DatePipe]
})
export class EditCustomerModule {}
