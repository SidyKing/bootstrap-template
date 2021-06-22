import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'App'
    }
  },
  { 
  path: '',
  component: AppComponent,
  data: {
    title: 'App'
  },
    children: [
      {
        path: 'connexion',
        loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule)
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
