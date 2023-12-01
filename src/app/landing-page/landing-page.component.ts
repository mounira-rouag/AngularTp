import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent {
  constructor(private router: Router){}
  onContinue(){
    this.router.navigateByUrl('etudevals');
  }
}
