import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsComponent {

}
