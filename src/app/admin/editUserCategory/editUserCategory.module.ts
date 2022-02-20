import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditUserCategoryComponent } from './componenets/editUserCategory.component'
import { editUserCategoryService } from './services/editUserCategory.service'
import { UserCategoryService } from '../shared/services/usercategory.service'
import { UserCategoryFormModule } from '../shared/modules/usercategoryform/usercategoryform.module'
import { reducers } from './store/reducers'
import { EditUserCategoryEffect } from './store/effects/editUserCategory.effect'
import {GetUserCategoryEffect } from './store/effects/getUserCategory.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: EditUserCategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserCategoryFormModule,
    EffectsModule.forFeature([EditUserCategoryEffect,GetUserCategoryEffect]),
    StoreModule.forFeature('editUserCategory', reducers)
  ],
  declarations: [EditUserCategoryComponent],
  providers: [editUserCategoryService,UserCategoryService,DatePipe]
})
export class EditUserCategoryModule {}
