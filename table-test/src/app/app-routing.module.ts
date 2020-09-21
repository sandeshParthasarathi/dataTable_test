import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/components/main/main.component'


const routes: Routes = [
  { path: '', redirectTo: 'data-table', pathMatch: 'full' },
  { path: 'data-table', component:  MainComponent},
  { path: '**', redirectTo: 'data-table', pathMatch: 'full' }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
