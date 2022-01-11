import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedListComponent } from './components/deleted-list/deleted-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: DeletedListComponent }];

@NgModule({
  declarations: [DeletedListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  bootstrap: [DeletedListComponent],
})
export class DeletedModule {}
