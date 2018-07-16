import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BodyComponent} from './body/body.component';
import {ContentPanelComponent} from './body/content-panel/content-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContentPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
