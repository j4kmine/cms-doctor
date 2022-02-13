import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {listDoctorComponent} from 'src/app/listDoctor/components/listDoctor/listDoctor.component'
import {TablelistModule} from '../shared/modules/tablelist/tablelist.module'


const routes = [
  {
    path: 'listdoctor',
    component: listDoctorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TablelistModule,
  ],
  declarations: [listDoctorComponent]
})
export class listDoctorModule {}
