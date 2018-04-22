import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2Carousel3dModule } from 'ng2-carousel-3d';

import { AppComponent } from './app.component';
import { BodyComponent} from './body/body.component';

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
