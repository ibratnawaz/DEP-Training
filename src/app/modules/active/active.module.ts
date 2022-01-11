import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveListComponent } from './components/active-list/active-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: ActiveListComponent }];

@NgModule({
  declarations: [ActiveListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  bootstrap: [ActiveListComponent],
})
export class ActiveModule {}
