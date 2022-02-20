import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateLanguageComponent } from './componenets/createLanguage.component'
import { CreateLanguageService } from './services/createLanguage.service'
import { LanguageFormModule } from '../shared/modules/languageform/languageform.module'
import { reducers } from './store/reducers'
import {CreateLanguageEffect} from './store/effects/createLanguage.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: CreateLanguageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LanguageFormModule,
    EffectsModule.forFeature([CreateLanguageEffect]),
    StoreModule.forFeature('createLanguage', reducers)
  ],
  declarations: [CreateLanguageComponent],
  providers: [CreateLanguageService]
})
export class CreateLanguageModule {}
