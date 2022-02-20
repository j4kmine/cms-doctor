import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateUserCategoryComponent } from './componenets/createUserCategory.component'
import { CreateUserCategoryService } from './services/createUserCategory.service'
import { UserCategoryFormModule } from '../shared/modules/usercategoryform/usercategoryform.module'
import { reducers } from './store/reducers'
import {CreateUserCategoryEffect} from './store/effects/createUserCategory.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: CreateUserCategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserCategoryFormModule,
    EffectsModule.forFeature([CreateUserCategoryEffect]),
    StoreModule.forFeature('createUserCategory', reducers)
  ],
  declarations: [CreateUserCategoryComponent],
  providers: [CreateUserCategoryService]
})
export class CreateUserCategoryModule {}
