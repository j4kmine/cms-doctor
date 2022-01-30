import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateCustomerComponent } from './componenets/createCustomer.component'
import { CreateCustomerService } from './services/createCustomer.service'
import { UserFormModule } from '../shared/modules/userform/userform.module'
import { reducers } from './store/reducers'
import {CreateCustomerEffect} from './store//effects/createCustomer.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: 'customer/new',
    component: CreateCustomerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserFormModule,
    EffectsModule.forFeature([CreateCustomerEffect]),
    StoreModule.forFeature('createCustomer', reducers)
  ],
  declarations: [CreateCustomerComponent],
  providers: [CreateCustomerService]
})
export class CreateCustomerModule {}
