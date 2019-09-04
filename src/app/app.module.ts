import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ProjectsComponent } from './projects/projects.component';
import { InputComponent } from './shared/input/input.component';
import { BackgroundComponent } from './background/background.component';
import { CaseComponent } from './projects/case/case.component';
import { ContactComponent } from './contact/contact.component';
import { IntegrationService } from './services/integration.service';
import { DashboardComponent } from './restrict/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PreloaderComponent,
    CaseComponent,
    ProjectsComponent,
    BackgroundComponent,
    ContactComponent,
    InputComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
