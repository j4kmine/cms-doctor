import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateDoctorComponent } from './componenets/createDoctor.component'
import { CreateDoctorService } from './services/createDoctor.service'
import { DoctorFormModule } from '../shared/modules/doctorform/doctorform.module'
import { reducers } from './store/reducers'
import {CreateDoctorEffect} from './store/effects/createDoctor.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: CreateDoctorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DoctorFormModule,
    EffectsModule.forFeature([CreateDoctorEffect]),
    StoreModule.forFeature('createDoctor', reducers)
  ],
  declarations: [CreateDoctorComponent],
  providers: [CreateDoctorService]
})
export class CreateDoctorModule {}
