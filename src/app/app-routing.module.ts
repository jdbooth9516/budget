import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'add', component: CreateEntryComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
