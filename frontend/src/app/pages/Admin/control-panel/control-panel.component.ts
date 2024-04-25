import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {

  constructor (private router: Router){}

  navigateToDashboard() {
    this.router.navigate(["/dashboard"])
}

}
