<<<<<<< HEAD
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
}

=======
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
}

>>>>>>> 9ed240678e279fddec5fe3b25db25c6590c220f1
