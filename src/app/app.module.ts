import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects'
import { environment } from 'src/environments/environment'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '../app/shared/modules/navigation/navigation.module'
import { SidebarModule } from '../app/shared/modules/sidebar/sidebar.module'
import { UserFormModule } from '../app/shared/modules/userform/userform.module'
import { BannerFormModule } from '../app/shared/modules/bannerform/bannerform.module'
import { DoctorFormModule } from '../app/shared/modules/doctorform/doctorform.module'
import { CreateCustomerModule } from '../app/createCustomer/createCustomer.module'
import { TablelistModule } from '../app/shared/modules/tablelist/tablelist.module'
import { CreateBannerModule } from '../app/createBanner/createBanner.module'
import { CreateDoctorModule } from './createDoctor/createDoctor.module'
import { EditCustomerModule } from './editCustomer/editCustomer.module'
import { EditDoctorModule } from './editDoctor/editDoctor.module'
import { EditBannerModule } from './editBanner/editBanner.module'
import { listCustomerModule } from './listCustomer/listCustomer.module'
import { listDoctorModule } from './listDoctor/listDoctor.module'
import { listBannerModule } from './listBanner/listBanner.module'
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import {AuthModule} from 'src/app/auth/auth.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({router: routerReducer}),
    NavigationModule,
    UserFormModule,
    BannerFormModule,
    CreateCustomerModule,
    CreateBannerModule,
    DoctorFormModule,
    SidebarModule,
    EditCustomerModule,
    EditDoctorModule,
    CreateDoctorModule,
    TablelistModule,
    EditBannerModule,
    listCustomerModule,
    listDoctorModule,
    listBannerModule,
    AuthModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
