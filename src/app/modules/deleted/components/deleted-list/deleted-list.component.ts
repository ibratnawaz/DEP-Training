import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-deleted-list',
  templateUrl: './deleted-list.component.html',
  styleUrls: ['./deleted-list.component.css'],
})
export class DeletedListComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  usersList: User[] = [];

  ngOnInit(): void {
    this.getDeactivatedUser();
  }

  getDeactivatedUser() {
    this.usersList = this.usersService.usersList.filter(
      (user: User) => user.isDeleted
    );
  }

  onAactivate(id: string) {
    this.usersService.toggleActivation(id, false);
    this.getDeactivatedUser();
  }
}
