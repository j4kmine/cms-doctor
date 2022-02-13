import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listDoctor.component.html',
  styleUrls: ['./listDoctor.component.scss']
})
export class listDoctorComponent {
  apiUrl = 'doctor'
  header = ["ID", "Name", "Email", "Contact"]
  field = ["_idx","doctorname","email","address"]
}
