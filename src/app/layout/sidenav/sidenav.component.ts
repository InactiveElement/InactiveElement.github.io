import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    const landingComponent = document.getElementById('landingComponent');
    landingComponent.scrollIntoView();
  }

  gitProjects() {
    const githubComponent = document.getElementById('githubComponent');
    githubComponent.scrollIntoView();
  }
  
  education() {
    const educationComponent = document.getElementById('educationComponent');
    educationComponent.scrollIntoView();
    // {behavior:'smooth', block: 'nearest'}
  }

  personal() {
    const personalComponent = document.getElementById('personalComponent');
    personalComponent.scrollIntoView();
    // {behavior: 'smooth', block: 'nearest'}
  }

}
