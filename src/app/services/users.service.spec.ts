import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should toggle user account active status to true', () => {
    service.usersList[0].isDeleted = false;
    service.toggleActivation('9c24', true);
    let finalStatus = service.usersList[0].isDeleted;
    expect(finalStatus).toBeTruthy();
  });

  it('it should toggle user account active status to false', () => {
    service.usersList[1].isDeleted = true;
    service.toggleActivation('9c25', false);
    let finalStatus = service.usersList[1].isDeleted;
    expect(finalStatus).toBeFalsy();
  });
});
