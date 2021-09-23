import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { DetailsComponent } from './components/details/details.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: 'add', component: CreateEntryComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
