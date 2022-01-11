import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let navigateByUrlParam = '';
  let routeFixture: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigateByUrl: function (link: string) {
              navigateByUrlParam = link;
            },
            events: {
              subscribe: () => {},
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    routeFixture = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('it should navigate', () => {
    spyOn(routeFixture, 'navigateByUrl').and.callThrough();
    component.onNavigation('home');
    // expect(navigateByUrlParam).toEqual('home');
    expect(routeFixture.navigateByUrl).toHaveBeenCalledWith('home');
  });
});
