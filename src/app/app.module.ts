import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './layout/test/test.component';
import { DefaultComponent } from './layout/default/default.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ManagementComponent } from './management/management.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CsvOutputComponent } from './csv-output/csv-output.component';
import { AttendListComponent } from './attend-list/attend-list.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ClassListComponent,
    TestComponent,
    ManagementComponent,
    AppHeaderComponent,
    CsvOutputComponent,
    AttendListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: DefaultComponent,
        children: [
          { path: '', component: ClassListComponent },
          { path: 'manage', component: ManagementComponent },
          { path: 'csv', component: CsvOutputComponent },
          { path: 'attend', component: AttendListComponent },
        ]
      },
      {
        path: "login",
        component: TestComponent,
        children: [
          {
            path: '',
            component: LoginComponent
          }
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
