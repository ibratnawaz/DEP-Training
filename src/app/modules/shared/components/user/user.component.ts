import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  @Input('btnText')
  btnText!: string;

  @Input('user')
  user!: User;

  @Output('sendId') sendId = new EventEmitter<any>();

  btnColor: string = '';

  ngOnInit(): void {
    switch (this.btnText) {
      case 'Activate':
        this.btnColor = 'btn-success';
        break;
      case 'Deactivate':
        this.btnColor = 'btn-danger';
        break;
      default:
        this.btnColor = 'btn-primary';
        break;
    }
  }

  getId(id: string) {
    this.sendId.emit(id);
  }
}
