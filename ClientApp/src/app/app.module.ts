import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonPhonesComponent } from './person-phones/person-phones.component';
import { PersonPhoneAddEditComponent } from './person-phone-add-edit/person-phone-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonPhonesComponent,
    PersonPhoneAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
