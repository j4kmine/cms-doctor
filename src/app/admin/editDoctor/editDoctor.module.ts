import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditDoctorComponent } from './componenets/editDoctor.component'
import { editDoctorService } from './services/editDoctor.service'
import { DoctorService } from '../shared/services/doctor.service'
import { DoctorFormModule } from '../shared/modules/doctorform/doctorform.module'
import { reducers } from './store/reducers'
import { EditDoctorEffect } from './store/effects/editDoctor.effect'
import {GetDoctorEffect } from './store/effects/getDoctor.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: EditDoctorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DoctorFormModule,
    EffectsModule.forFeature([EditDoctorEffect,GetDoctorEffect]),
    StoreModule.forFeature('EditDoctor', reducers)
  ],
  declarations: [EditDoctorComponent],
  providers: [editDoctorService,DoctorService,DatePipe]
})
export class EditDoctorModule {}
