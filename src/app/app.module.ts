import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ngModel
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
//Angular provides a client HTTP API
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
//ReactiveFormsModule for designing and validating the form elements
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarouselComponent,
    CardsComponent,
    RegisterComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
