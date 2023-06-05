import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhoAreWe1Component } from './pages/who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './pages/who-are-we2/who-are-we2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'who_are_we1', component: WhoAreWe1Component },
  { path: 'who_are_we2', component: WhoAreWe2Component },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
