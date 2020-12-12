                
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  launchFirstComponent() {
    this.router.navigate(['/first'])
  }

  launchSecondComponent() {
    this.router.navigate(['/second'])
  }

  launchThirdComponent() {
    this.router.navigate(['/third'])
  }

  launchForthComponent() {
    this.router.navigate(['/forth'])
  }

}