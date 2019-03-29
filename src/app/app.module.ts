import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './shared/botao/botao.component';
import { LabelComponent } from './shared/label/label.component';
import { SelectComponent } from './shared/select/select.component';
import { TableComponent } from './shared/table/table.component';
import { TablePipe } from './pipes/table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    LabelComponent,
    SelectComponent,
    TableComponent,
    TablePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
