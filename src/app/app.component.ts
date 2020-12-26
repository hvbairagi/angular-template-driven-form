import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';
  topics = ['Angular', 'React', 'Vue'];
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('Success!', data),
      (error) => (this.errorMsg = error.statusText)
    );
  }

  topicHasError = true;

  validateTopic(value) {
    if (value === 'dafault' || value === '') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  userModel = new User(
    'Rob',
    'rob@gmail.com',
    4545454545,
    'default',
    'morning',
    true
  );
}
