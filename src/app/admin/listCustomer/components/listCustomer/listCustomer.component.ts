import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listCustomer.component.html',
  styleUrls: ['./listCustomer.component.scss']
})
export class listCustomerComponent {
  apiUrl = 'customer'
  header = ["ID", "Name", "Email", "Contact"]
  field = ["_idx","customername","email","phonenumber"]
}
