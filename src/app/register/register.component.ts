import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  };
  errorMessage!: string;

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        // Handle successful registration
        console.log('Registration successful');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
