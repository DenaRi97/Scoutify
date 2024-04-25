import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ControlPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor (private router: Router){}

  navigateToHome() {
    this.router.navigate(["/dashboard"])
}


}
