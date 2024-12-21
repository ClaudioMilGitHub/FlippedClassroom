import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomandaItemComponent } from './components/domanda-item/domanda-item.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { InputUtenteComponent } from './components/input-utente/input-utente.component';
import { DomandaListComponent } from './components/domanda-list/domanda-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OptionsComponent } from './components/options/options.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { DialogQuizResultsComponent } from './components/dialogs/dialog-quiz-results/dialog-quiz-results.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    DomandaItemComponent,
    InputUtenteComponent,
    DomandaListComponent,
    ToolbarComponent,
    HomepageComponent,
    OptionsComponent,
    DialogQuizResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
