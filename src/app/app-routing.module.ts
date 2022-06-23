import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheersComponent } from './page/cheers/cheers.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'cheerz',
    component: CheersComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
