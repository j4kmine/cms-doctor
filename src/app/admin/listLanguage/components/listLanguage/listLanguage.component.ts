import {Component} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './listLanguage.component.html',
  styleUrls: ['./listLanguage.component.scss']
})
export class listLanguageComponent {
  apiUrl = 'language'
  header = ["ID", "Prefix", "Lang", "LocaleIndex"]
  field = ["_idx","prefixlang","lang","localeindex"]
}
