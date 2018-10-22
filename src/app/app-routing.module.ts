import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabirintoComponent } from './ui/labirinto/labirinto.component';
import { IndexComponent } from './ui/index/index.component';
import { AjudaComponent } from './ui/ajuda/ajuda.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'labirinto', component: LabirintoComponent},
  {path: 'ajuda', component: AjudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
