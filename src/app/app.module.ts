import { LivrosService } from './livros.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LivrosPesquisaComponent
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
    FormsModule
  ],
  providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
