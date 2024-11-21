import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [FormsModule] // Import FormsModule here
})
export class UserFormComponent {
  location: string = ''; // Variable to hold user input

  @Output() locationSubmitted: EventEmitter<string> = new EventEmitter<string>();

  // Method to submit the location
  submitLocation() {
    if (this.location.trim()) {
      this.locationSubmitted.emit(this.location); // Emit event with location
    }
  }
}

