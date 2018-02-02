import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { MatTabsModule, MatTableModule, MatInputModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    BrowserAnimationsModule, MatButtonModule, MatFormFieldModule,
    MatCheckboxModule, MatIconModule, MatToolbarModule, MatMenuModule,
   MatTabsModule, MatTableModule, MatInputModule,  // FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
