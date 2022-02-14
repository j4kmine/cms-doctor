import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { environment } from 'src/environments/environment'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavigationModule } from './shared/modules/navigation/navigation.module'
import { SidebarModule } from './shared/modules/sidebar/sidebar.module'
import { UserFormModule } from './shared/modules/userform/userform.module'
import { BannerFormModule } from './shared/modules/bannerform/bannerform.module'
import { DoctorFormModule } from './shared/modules/doctorform/doctorform.module'
import { CreateCustomerModule } from './createCustomer/createCustomer.module'
import { TablelistModule } from './shared/modules/tablelist/tablelist.module'
import { CreateBannerModule } from './createBanner/createBanner.module'
import { CreateDoctorModule } from './createDoctor/createDoctor.module'
import { EditCustomerModule } from './editCustomer/editCustomer.module'
import { EditDoctorModule } from './editDoctor/editDoctor.module'
import { EditBannerModule } from './editBanner/editBanner.module'
import { listCustomerModule } from './listCustomer/listCustomer.module'
import { listDoctorModule } from './listDoctor/listDoctor.module'
import { listBannerModule } from './listBanner/listBanner.module'
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import { Routes, RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'listcustomer',
        loadChildren: () => import('../admin/listCustomer/listCustomer.module').then(m => m.listCustomerModule)
      },
      {
        path: 'listdoctor',
        loadChildren: () => import('../admin/listDoctor/listDoctor.module').then(m => m.listDoctorModule)
      },
      {
        path: 'listbanner',
        loadChildren: () => import('../admin/listBanner/listBanner.module').then(m => m.listBannerModule)
      },
      {
        path: 'banner/new',
        loadChildren: () => import('../admin/createBanner/createBanner.module').then(m => m.CreateBannerModule)
      },
      {
        path: 'customer/new',
        loadChildren: () => import('../admin/createCustomer/createCustomer.module').then(m => m.CreateCustomerModule)
      },
      {
        path: 'doctor/new',
        loadChildren: () => import('../admin/createDoctor/createDoctor.module').then(m => m.CreateDoctorModule)
      },
      {
        path: 'banner/:id/edit',
        loadChildren: () => import('../admin/editBanner/editBanner.module').then(m => m.EditBannerModule)
      },
      {
        path: 'customer/:id/edit',
        loadChildren: () => import('../admin/editCustomer/editCustomer.module').then(m => m.EditCustomerModule)
      },
      {
        path: 'doctor/:id/edit',
        loadChildren: () => import('../admin/editDoctor/editDoctor.module').then(m => m.EditDoctorModule)
      }
    ]
  }
 ,
]
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
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
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
