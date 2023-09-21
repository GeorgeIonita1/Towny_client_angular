import { Component, Input } from '@angular/core';
import { INavigationLinks } from '../../models/navigation.model';

@Component({
  selector: 'app-sidebar-category-btn',
  templateUrl: './sidebar-category-btn.component.html',
  styleUrls: ['./sidebar-category-btn.component.css']
})
export class SidebarCategoryBtnComponent {
  @Input() link: INavigationLinks | undefined;
}
