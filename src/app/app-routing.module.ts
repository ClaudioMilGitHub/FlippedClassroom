import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DomandaListComponent} from "./components/domanda-list/domanda-list.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {OptionsComponent} from "./components/options/options.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'quiz-list', component:DomandaListComponent},
  {path: 'options', component: OptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
