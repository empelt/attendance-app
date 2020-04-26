import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AttendListComponent } from './attend-list/attend-list.component';
import { ManagementComponent } from './management/management.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    AttendListComponent,
    ManagementComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ClassListComponent },
      { path: 'attend', component: AttendListComponent },
      { path: 'manage', component: ManagementComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
