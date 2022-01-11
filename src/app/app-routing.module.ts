import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveListComponent } from './modules/active/components/active-list/active-list.component';
import { DeletedListComponent } from './modules/deleted/components/deleted-list/deleted-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'active', component: ActiveListComponent },
  { path: 'deleted', component: DeletedListComponent },
  {
    path: 'manage',
    loadChildren: () =>
      import('./modules/manage/manage.module').then(
        (module) => module.ManageModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
