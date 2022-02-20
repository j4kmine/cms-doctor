import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateUserComponent } from './componenets/createUser.component'
import { CreateUserService } from './services/createUser.service'
import { AdminFormModule } from '../shared/modules/adminform/adminform.module'
import { reducers } from './store/reducers'
import {CreateUserEffect} from './store/effects/createUser.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: CreateUserComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminFormModule,
    EffectsModule.forFeature([CreateUserEffect]),
    StoreModule.forFeature('createUser', reducers)
  ],
  declarations: [CreateUserComponent],
  providers: [CreateUserService]
})
export class CreateUserModule {}
