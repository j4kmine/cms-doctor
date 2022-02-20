import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listUserCategory.component.html',
  styleUrls: ['./listUserCategory.component.scss']
})
export class listUserCategoryComponent {
  apiUrl = 'usercategory'
  header = ["ID", "User Category", "HomeScreen", "HomeSCreen"]
  field = ["_idx","usercategory","homescreen","homescreen"]
}
