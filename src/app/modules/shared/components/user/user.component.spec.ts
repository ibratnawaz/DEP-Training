import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullNamePipe } from 'src/app/pipes/full-name/full-name.pipe';
import { TitleCasePipe } from 'src/app/pipes/title-case/title-case.pipe';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, FullNamePipe, TitleCasePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
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

  it('should emit with the given id', () => {
    spyOn(component.sendId, 'emit').and.callFake((id: string) =>
      console.log('>> id is ' + id)
    );
    component.getId('9c01');
    expect(component.sendId.emit).toHaveBeenCalledWith('9c01');
  });
});
