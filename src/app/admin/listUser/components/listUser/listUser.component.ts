import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listUser.component.html',
  styleUrls: ['./listUser.component.scss']
})
export class listUserComponent {
  apiUrl = 'user'
  header = ["ID", "Name", "Email", "Contact"]
  field = ["_idx","username","email","phonenumber"]
}
