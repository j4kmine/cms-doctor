import {Component, OnInit} from '@angular/core'
import { logoutAction } from 'src/app/auth/store/actions/sync.action'
import {Store, select} from '@ngrx/store'
@Component({
  selector: 'mc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 

  constructor(private store: Store) {}

  ngOnInit(): void {
  
  }
  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
