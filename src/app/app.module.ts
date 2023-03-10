import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransazioniListComponent } from './transazioni-list/transazioni-list.component';
import { TransazioniDetailComponent } from './transazioni-detail/transazioni-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListComponent,
    TransazioniDetailComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
