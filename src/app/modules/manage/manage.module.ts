import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [{ path: '', component: ManageUsersComponent }];

@NgModule({
  declarations: [ManageUsersComponent, UserDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  bootstrap: [ManageUsersComponent],
})
export class ManageModule {}
