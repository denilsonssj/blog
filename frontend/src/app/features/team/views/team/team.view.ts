import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.view.html',
  styleUrls: ['./team.view.scss']
})
export class TeamView {

  title: string = 'Team';

  team: any = [
    {
      url: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
      name: 'Karen Page',
      role: 'Director of photography',
    },
    {
      url: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      name: 'Mary Jane',
      role: 'Editor',
    },
    {
      url: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      name: 'Cristian Bale',
      role: 'Writer'
    },
    {
      url: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Brian Smith',
      role: 'Photographer'
    },
    {
      url: 'https://images.unsplash.com/photo-1513097847644-f00cfe868607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
      name: 'Xiang Ling',
      role: 'Social Media'
    }
  ];

  constructor(private titleService: Title) { 
    this.titleService.setTitle(this.title);
  }

}
