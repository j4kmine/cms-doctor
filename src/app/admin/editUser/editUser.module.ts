import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditUserComponent } from './componenets/editUser.component'
import { editUserService } from './services/editUser.service'
import { UserService } from '../shared/services/user.service'
import { AdminFormModule } from '../shared/modules/adminform/adminform.module'
import { reducers } from './store/reducers'
import { EditUserEffect } from './store/effects/editUser.effect'
import {GetUserEffect } from './store/effects/getUser.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: EditUserComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminFormModule,
    EffectsModule.forFeature([EditUserEffect,GetUserEffect]),
    StoreModule.forFeature('editUser', reducers)
  ],
  declarations: [EditUserComponent],
  providers: [editUserService,UserService,DatePipe]
})
export class EditUserModule {}
