import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './components/videos/videos.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, VideosComponent]
})
export class AppComponent {
  title = 'Scoutify';
}
