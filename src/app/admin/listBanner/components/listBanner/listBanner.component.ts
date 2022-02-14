import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listBanner.component.html',
  styleUrls: ['./listBanner.component.scss']
})
export class listBannerComponent {
  apiUrl = 'banner'
  header = ["ID", "category", "Title ID", "Subtitle ID"]
  field = ["_idx","category","title_ID","subtitle_ID"]
}
