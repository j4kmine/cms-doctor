import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {PaginationModule} from 'src/app/shared/modules/pagination/pagination.module'
import {TablelistComponent} from './components/tablelist.component'
import {TablelistService} from './services/tablelist.service'
import { GetTablelistEffect } from './store/effects/getTablelist.effect'
import {DeleteTableEffect} from './store/effects/deleteTable.effect'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetTablelistEffect,DeleteTableEffect]),
    StoreModule.forFeature('GetTablelist', reducers),
    RouterModule,
    PaginationModule,
  ],
  declarations: [TablelistComponent],
  exports: [TablelistComponent],
  providers: [TablelistService]
})
export class TablelistModule {}
