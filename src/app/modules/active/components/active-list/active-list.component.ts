import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css'],
})
export class ActiveListComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  usersList: User[] = [];

  ngOnInit(): void {
    this.getActiveUser();
  }

  getActiveUser() {
    this.usersList = this.usersService.usersList.filter(
      (user: User) => !user.isDeleted
    );
  }

  onDeactivate(id: string) {
    this.usersService.toggleActivation(id, true);
    this.getActiveUser();
  }
}
