import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {TablelistComponent} from './components/tablelist.component'
import {TablelistService} from './services/tablelist.service'
import {GetTablelistEffect} from './store/effects/getTablelist.effect'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetTablelistEffect]),
    StoreModule.forFeature('GetTablelist', reducers),
    RouterModule,
  ],
  declarations: [TablelistComponent],
  exports: [TablelistComponent],
  providers: [TablelistService]
})
export class TablelistModule {}
