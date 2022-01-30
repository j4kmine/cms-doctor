import { AfterViewInit, Component } from '@angular/core';
declare var wrapper: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'mydouctor-cms';

  ngAfterViewInit() {
    wrapper();
  }
}
