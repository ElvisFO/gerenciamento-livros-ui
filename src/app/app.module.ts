import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LivrosComponent } from './livros/livros.component';
import { NavbarComponent } from './navbar/navbar.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
