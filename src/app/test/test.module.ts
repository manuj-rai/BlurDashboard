import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestUserComponent } from './test-user/test-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TestUserComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TestUserComponent]
})
export class TestModule { }
