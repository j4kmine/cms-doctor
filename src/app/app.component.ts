import { AfterViewInit, Component,OnInit } from '@angular/core';
declare var wrapper: any;
import { isLoggedInSelector } from 'src/app/auth/store/selectors'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit {
  title = 'mydouctor-cms';
  isLoggedIn$: Observable<boolean>
  constructor(private store: Store,private router: Router) {}
  ngAfterViewInit() {
   
  }
  ngOnInit(): void {
    this.initializeValues()
  }
  initializeValues(): void {
    this.store.select(isLoggedInSelector).subscribe((isloggedin) => {
      if (!isloggedin) {
        this.router.navigate(['auth/login']);
        }
    })
  }
}
