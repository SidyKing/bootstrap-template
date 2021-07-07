import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch:'full'
  },
  {
    path: 'main',
    component: MainComponent,
    data: {
      title: 'principale'
    }
  },
  {
    path: 'acceuil',
    component: AcceuilComponent,
    data: {
      title: 'acceuil'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
