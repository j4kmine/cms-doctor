import {Component, OnInit} from '@angular/core'
import {UserCategoryInputInterface} from '../../shared/types/usercategoryInput.interface'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createUserCategoryAction} from '../store/actions/createUserCategory.action'

@Component({
  selector: 'mc-create-usercategory',
  templateUrl: './createUserCategory.component.html',
  styleUrls: ['./createUserCategory.component.scss']
})
export class CreateUserCategoryComponent implements OnInit {
  initialValues: UserCategoryInputInterface = {
    usercategory: '',
    homescreen: '',
 
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(usercategoryInput: UserCategoryInputInterface): void {
 
    this.store.dispatch(createUserCategoryAction({usercategoryInput}))
  }
}
