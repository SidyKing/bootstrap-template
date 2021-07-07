import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { SideBarComponent } from './containers/side-bar/side-bar.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ConnexionModule } from './connexion/connexion.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PagesModule } from './pages/pages.module';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    MainComponent,
    AcceuilComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnexionModule,
    PagesModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
