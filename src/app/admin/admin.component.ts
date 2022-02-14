import { AfterViewInit, Component,OnInit } from '@angular/core';
declare var wrapper: any;
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit,OnInit {
  title = 'mydouctor-cms';
  isLoggedIn$: Observable<boolean>
  constructor(private store: Store) {}
  ngAfterViewInit() {
    wrapper();
  }
  ngOnInit(): void {
    this.initializeValues()
  }
  initializeValues(): void {

  }
}
