import {Component, Input, OnInit, OnDestroy} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {stringify, parseUrl} from 'query-string'

import {deleteTablelistAction, getTablelistAction} from '../store/actions/getTablelist.action'
import { GetTablelistResponseInterface } from '../types/getTablelistResponse.interface'
import {CustomerInputInterface} from '../../../../shared/types/customerInput.interface'
import {
  tablelistSelector
} from '../store/selectors'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'mc-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss']
})
export class TablelistComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string
  @Input('header') header: any = []
  @Input('field') field: any = []

  tablelist$: Observable<GetTablelistResponseInterface | null>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1')
        this.fetchTablelist()
      }
    )
  }

  initializeValues(): void {
    this.tablelist$ = this.store.pipe(select(tablelistSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }
  deleteData(id: string) {
    const parsedUrl = this.apiUrlProps+"/delete/"+id
    this.store.dispatch(deleteTablelistAction({fullurl: parsedUrl}))
  }
  fetchTablelist(): void {
    const offset = this.currentPage * this.limit - this.limit
   
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifiedParams = stringify({
      page: this.currentPage,
      npp: this.limit,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
 
    this.store.dispatch(getTablelistAction({url: apiUrlWithParams}))
  }
  
}
