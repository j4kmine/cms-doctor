import {Component, OnInit} from '@angular/core'
import {UserInputInterface} from '../../shared/types/userInput.interface'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  userSelector
} from '../store/selectors'
import {editUserAction} from '../store/actions/editUser.action'
import {getUserAction} from '../store/actions/getUser.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-customer',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.scss']
})
export class EditUserComponent implements OnInit {
  initialValues$: Observable<UserInputInterface>
  isSubmitting$: Observable<boolean>
  id: number
 

  constructor(private store: Store,private route: ActivatedRoute,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()
   
  }
  initialValues(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
 
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.initialValues$ = this.store.pipe(
      select(userSelector),
      filter(Boolean),
      map((user: UserInputInterface) => {
        return {
          username: user.username,
          email: user.email,
          password: user.password,
       
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getUserAction({id: this.id}))
  }
  onSubmit(userInput: UserInputInterface): void {
 
    this.store.dispatch(editUserAction({id:this.id, userInput}))
  }
}
