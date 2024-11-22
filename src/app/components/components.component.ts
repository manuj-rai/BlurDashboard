import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  dataSource = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  displayedColumns = ['id', 'name']; // Column definitions

}
