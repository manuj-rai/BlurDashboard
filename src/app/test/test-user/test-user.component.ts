import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css'] // Fixed from styleUrl to styleUrls
})
export class TestUserComponent {
  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inquiryForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    if (this.inquiryForm.valid) {
      console.log('Form Submitted:', this.inquiryForm.value);
    } else {
      console.log('Form is invalid!');
      Object.keys(this.inquiryForm.controls).forEach(key => {
        this.inquiryForm.controls[key].markAsTouched();
      });
    }
  }
}