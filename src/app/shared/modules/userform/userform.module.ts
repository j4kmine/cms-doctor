import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {UserformComponent} from './components/userform.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  declarations: [UserformComponent],
  exports: [UserformComponent]
})
export class UserFormModule {}