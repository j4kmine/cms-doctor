import {Component, OnInit} from '@angular/core'
import { logoutAction } from 'src/app/auth/store/actions/sync.action'
import {Store, select} from '@ngrx/store'
@Component({
  selector: 'mc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 

  constructor(private store: Store) {}

  ngOnInit(): void {
  
  }
  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
