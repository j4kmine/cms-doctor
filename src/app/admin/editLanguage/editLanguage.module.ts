import {NgModule} from '@angular/core'
import {CommonModule,DatePipe} from '@angular/common'
import { EditLanguageComponent } from './componenets/editLanguage.component'
import { editLanguageService } from './services/editLanguage.service'
import { LanguageService } from '../shared/services/language.service'
import { LanguageFormModule } from '../shared/modules/languageform/languageform.module'
import { reducers } from './store/reducers'
import { EditLanguageEffect } from './store/effects/editLanguage.effect'
import {GetLanguageEffect } from './store/effects/getLanguage.effect'
import {RouterModule} from '@angular/router'

import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'


const routes = [
  {
    path: '',
    component: EditLanguageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LanguageFormModule,
    EffectsModule.forFeature([EditLanguageEffect,GetLanguageEffect]),
    StoreModule.forFeature('editLanguage', reducers)
  ],
  declarations: [EditLanguageComponent],
  providers: [editLanguageService,LanguageService,DatePipe]
})
export class EditLanguageModule {}
