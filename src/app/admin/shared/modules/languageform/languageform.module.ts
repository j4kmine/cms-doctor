import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {LanguageformComponent} from './components/languageform.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  declarations: [LanguageformComponent],
  exports: [LanguageformComponent]
})
export class LanguageFormModule {}