import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { MatInputModule ,  } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActivityComponent } from './components/profile/activity/activity.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { TimelineComponent } from './components/profile/timeline/timeline.component';
import { GridComponent } from './components/grid/grid.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CurrencyMaskInputMode, NgxCurrencyModule} from 'ngx-currency';
import { TijarahTabsComponent } from './components/tijarah-tabs/tijarah-tabs.component';
import { InventoryPicturesComponent } from './components/tijarah-components/inventory-pictures/inventory-pictures.component'
// import { CreateCounterPartyComponent } from './components/create-counter-party/create-counter-party.component';

export const customCurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: false,
    decimal: ".",
    precision!: 0,
    prefix: "",
    suffix: "",
    thousands: ",",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.NATURAL
  };

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ErrorPageComponent,
    ProfileComponent,
    ActivityComponent,
    SettingsComponent,
    TimelineComponent,
    GridComponent,
    StudentFormComponent,
    TijarahTabsComponent,
    InventoryPicturesComponent

  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatTabsModule , // or SharedModule that exports MatFormFieldModule
    NgxCurrencyModule,
    RouterModule.forRoot([
      { path : "" , component: DashboardComponent},
      { path : "app-dashboard" , component: DashboardComponent},
      { path : "app-forms" ,component: FormsComponent },
      { path : "app-profile" ,component: ProfileComponent },
      { path : "app-grid" ,component: GridComponent },
      { path : "app-student-form" ,component: StudentFormComponent },
      { path : "app-tijarah-tabs" ,component: TijarahTabsComponent },
      { path : "**" ,component: ErrorPageComponent }
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
