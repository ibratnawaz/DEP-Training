import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckActiveUserPipe } from 'src/app/pipes/activation/check-active-user.pipe';
import { FullNamePipe } from 'src/app/pipes/full-name/full-name.pipe';
import { TitleCasePipe } from 'src/app/pipes/title-case/title-case.pipe';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserDetailsComponent,
        FullNamePipe,
        TitleCasePipe,
        CheckActiveUserPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = {
      id: '9c24',
      firstName: 'Karn',
      lastName: 'Pratap',
      age: 23,
      login: 'kps@epam.com',
      password: '12*****',
      isDeleted: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
