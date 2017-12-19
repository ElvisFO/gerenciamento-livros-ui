
import { AutorService } from './autor.service';
import { LivrosService } from './livros.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LivrosPesquisaComponent,
    LivrosCadastroComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    HttpModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    MultiSelectModule
  ],
  providers: [LivrosService, AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
