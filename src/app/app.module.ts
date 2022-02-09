import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParallaxDirective } from './parallax.directive';
import { ParallaxV2Directive } from './parallax-v2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParallaxDirective,
    ParallaxV2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
