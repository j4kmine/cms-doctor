import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'


import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {reducers} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/services/auth.service'

import {PersistanceService} from '../admin/shared/services/persistance.service'
import {LoginEffect} from 'src/app/auth/store/effects/login.effect'
import {LoginComponent} from 'src/app/auth/components/login/login.component'
import {GetCurrentUserEffect} from 'src/app/auth/store/effects/getCurrentUser.effect'

import {LogoutEffect} from './store/effects/logout.effect'

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      LoginEffect,
      GetCurrentUserEffect,
      LogoutEffect
    ])
  ],
  declarations: [LoginComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
