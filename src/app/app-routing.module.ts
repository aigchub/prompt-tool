import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  {
    path:'playground',
    component: PlaygroundComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
