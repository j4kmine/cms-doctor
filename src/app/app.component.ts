import { AfterViewInit, Component,OnInit } from '@angular/core';
declare var wrapper: any;
import { isLoggedInSelector } from 'src/app/auth/store/selectors'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit {
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
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
