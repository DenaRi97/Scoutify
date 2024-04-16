import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-hero-landing',
    standalone: true,
    templateUrl: './hero-landing.component.html',
    styleUrl: './hero-landing.component.css',
    imports: [FooterComponent]
})
export class HeroLandingComponent implements AfterViewInit {

  ngAfterViewInit() {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  }

  constructor(private router: Router) {} // Inject Router service

  navigateToAuth() {
    this.router.navigate(["/login"]);
  }
  navigateToAuthRegister() {
    this.router.navigate(["/register"]);
  }
  
  navigateToLogin() {
    this.router.navigate(['/login']); //Ruta que navega al componente login, importar el componente
  }
  navigateToRegister() {
    this.router.navigate(['/register']); 
  }

}
