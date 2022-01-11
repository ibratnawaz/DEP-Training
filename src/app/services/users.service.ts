import { Injectable } from '@angular/core';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  usersList: User[] = [
    {
      id: '9c24',
      firstName: 'Karn',
      lastName: 'Pratap',
      age: 23,
      login: 'kps@epam.com',
      password: '12*****',
      isDeleted: true,
    },
    {
      id: '9c25',
      firstName: 'Vaibhav',
      lastName: 'Gupta',
      age: 22,
      login: 'Vaibhav@epam.com',
      password: '34*****',
      isDeleted: false,
    },
    {
      id: '9c26',
      firstName: 'Roshan',
      lastName: 'Kharke',
      age: 21,
      login: 'Roshan123@epam.com',
      password: '88*****',
      isDeleted: true,
    },
    {
      id: '9c27',
      firstName: 'Ibrat',
      lastName: 'Nawaz',
      age: 23,
      login: 'Nawaz23@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '9c28',
      firstName: 'Sahil',
      lastName: 'Khan',
      age: 23,
      login: 'sahil23@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '9c29',
      firstName: 'Sharukh',
      lastName: 'Khan',
      age: 23,
      login: 'sharukh121@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '9c30',
      firstName: 'Hrithik',
      lastName: 'Roshan',
      age: 23,
      login: 'h.roshan@epam.com',
      password: '09*****',
      isDeleted: true,
    },
  ];

  toggleActivation(id: string, status: boolean) {
    let user: any = this.usersList.find((user: User) => user.id === id);
    user.isDeleted = status;
  }
}
