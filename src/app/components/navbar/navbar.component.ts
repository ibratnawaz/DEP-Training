import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  currentActiveLink: string = '/home';

  ngOnInit(): void {
    this.getActiveLink();
  }

  getActiveLink() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentActiveLink = event.url;
      }
    });
  }

  onNavigation(link: string) {
    console.log('>>>', this.router);
    this.router.navigateByUrl(link);
  }
}
