import {Component, OnInit} from '@angular/core'
import {UserInputInterface} from '../../shared/types/userInput.interface'
import {Observable} from 'rxjs'

import { Store, select } from '@ngrx/store'
import {
isSubmittingSelector
} from '../store/selectors'
import {createUserAction} from '../store/actions/createUser.action'

@Component({
  selector: 'mc-create-user',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.scss']
})
export class CreateUserComponent implements OnInit {
  initialValues: UserInputInterface = {
    username: '',
    email: '',
    password: '',
 
  }
  isSubmitting$: Observable<boolean>
 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
   
  }

  onSubmit(userInput: UserInputInterface): void {
 
    this.store.dispatch(createUserAction({userInput}))
  }
}
