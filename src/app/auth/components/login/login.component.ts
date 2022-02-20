import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import {PersistanceService} from '../../../admin/shared/services/persistance.service'
import {
  isLoggedInSelector,
  isSubmittingSelector,
} from 'src/app/auth/store/selectors'

import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface'
import {loginAction} from 'src/app/auth/store/actions/login.action'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
 

  constructor(private router: Router,private fb: FormBuilder, private store: Store,  private persistanceService: PersistanceService) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.store.select(isLoggedInSelector).subscribe((isloggedin) => {
      if (isloggedin) {
        this.router.navigate(['admin/listcustomer']);
        }
    })
    const token = this.persistanceService.get('accessToken')
    if (token) {
      this.router.navigate(['admin/listcustomer']);
    }
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
  }
}
