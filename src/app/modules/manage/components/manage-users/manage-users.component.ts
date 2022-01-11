import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  currentUserPreview!: User | undefined;

  ngOnInit(): void {
    this.currentUserPreview = this.usersService.usersList[0];
  }

  showUser(id: string) {
    this.currentUserPreview = this.usersService.usersList.find(
      (user: User) => user.id === id
    );
  }
}
