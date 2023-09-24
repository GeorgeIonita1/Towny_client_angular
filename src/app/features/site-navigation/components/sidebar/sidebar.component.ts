import { Component } from '@angular/core';
import { navigationLinks } from 'src/app/core/constants/site-navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navigationLinks = navigationLinks;
}
