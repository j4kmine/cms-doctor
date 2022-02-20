import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {UserCategoryformComponent} from './components/usercategoryform.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  declarations: [UserCategoryformComponent],
  exports: [UserCategoryformComponent]
})
export class UserCategoryFormModule {}