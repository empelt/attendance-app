import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ManagementComponent } from './management/management.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CsvOutputComponent } from './csv-output/csv-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ManagementComponent,
    AppHeaderComponent,
    CsvOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ClassListComponent },
      { path: 'manage', component: ManagementComponent },
      { path: 'csv', component: CsvOutputComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
