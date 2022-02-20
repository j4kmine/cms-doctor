import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {AdminformComponent} from './components/adminform.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  declarations: [AdminformComponent],
  exports: [AdminformComponent]
})
export class AdminFormModule {}