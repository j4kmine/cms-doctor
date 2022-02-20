import {Component, OnInit} from '@angular/core'
import {UserCategoryInputInterface} from '../../shared/types/usercategoryInput.interface'
import {Observable} from 'rxjs'
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  usercategorySelector
} from '../store/selectors'
import {editUserCategoryAction} from '../store/actions/editUserCategory.action'
import {getUserCategoryAction} from '../store/actions/getUserCategory.action'
import {ActivatedRoute} from '@angular/router'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'mc-create-customer',
  templateUrl: './editUserCategory.component.html',
  styleUrls: ['./editUserCategory.component.scss']
})
export class EditUserCategoryComponent implements OnInit {
  initialValues$: Observable<UserCategoryInputInterface>
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
      select(usercategorySelector),
      filter(Boolean),
      map((usercategory: UserCategoryInputInterface) => {
        return {
          usercategory: usercategory.usercategory,
          homescreen: usercategory.homescreen
       
        }
      })
    )
  }

  fetchData(): void {
 
    this.store.dispatch(getUserCategoryAction({id: this.id}))
  }
  onSubmit(usercategoryInput: UserCategoryInputInterface): void {
 
    this.store.dispatch(editUserCategoryAction({id:this.id, usercategoryInput}))
  }
}
