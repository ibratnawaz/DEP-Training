import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedListComponent } from './deleted-list.component';

fdescribe('DeletedListComponent', () => {
  let component: DeletedListComponent;
  let fixture: ComponentFixture<DeletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletedListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retreive deactivated users list', () => {
    component.usersList.length = 0;
    component.getDeactivatedUser();
    const length = component.usersList.length;
    expect(length).toBeTruthy();
  });

  fit('should have benn called getDeactivatedUser', () => {
    spyOn(component, 'getDeactivatedUser').and.callThrough();
    component.onAactivate('9c24');
    expect(component.getDeactivatedUser).toHaveBeenCalled();
  });
});
