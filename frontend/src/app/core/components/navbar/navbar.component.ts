import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Route {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpenDropdown: boolean = false;
  routes: Route[] = [];

  constructor(private route: Router) {
    this.routes = [
      { path: '', label: 'Dashboard' },
      { path: 'about', label: 'About' },
      { path: 'team', label: 'Team' },
      { path: 'feed', label: 'Feed' },
      { path: 'contact', label: 'Contact' },
    ];
  }

  ngOnInit(): void {}

  isActivedRoute(route: Route): boolean {
    return `/${route.path}` === this.route.url;
  }

}
