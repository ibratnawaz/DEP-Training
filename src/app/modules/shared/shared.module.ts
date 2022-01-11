import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { TitleCasePipe } from 'src/app/pipes/title-case/title-case.pipe';
import { FullNamePipe } from 'src/app/pipes/full-name/full-name.pipe';
import { CheckActiveUserPipe } from 'src/app/pipes/activation/check-active-user.pipe';

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    TitleCasePipe,
    FullNamePipe,
    CheckActiveUserPipe,
  ],
  imports: [CommonModule],
  exports: [
    UsersListComponent,
    TitleCasePipe,
    FullNamePipe,
    CheckActiveUserPipe,
  ],
})
export class SharedModule {}
