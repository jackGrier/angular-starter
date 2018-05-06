import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent} from './body/body.component';

import { Ng2Carousel3dModule } from 'ng2-carousel-3d';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    Ng2Carousel3dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
