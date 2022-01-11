import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('currentUserPreview')
  user!: User;
}
