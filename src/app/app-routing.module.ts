import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ComboComponent } from './combo/combo.component';
import { RadioComponent } from './radio/radio.component';

const routes: Routes = [
  {path: 'autocompletecomponent', component: AutocompleteComponent},
  {path: 'comboComponent', component: ComboComponent},
  {path: 'radioComponent', component: RadioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
