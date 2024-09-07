import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-browse-menu',
  templateUrl: './browse-menu.component.html',
  styleUrl: './browse-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseMenuComponent {}
