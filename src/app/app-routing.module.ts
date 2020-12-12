import { SecondComponent } from './second/second.component';
import { ForthComponent } from './forth/forth.component';
import { ThirdComponent } from './third/third.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'forth', component: ForthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
