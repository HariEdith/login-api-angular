import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    username: '',
    password: '',
    email: ''
  };
  errorMessage!: string;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.user).subscribe(
      response => {
        // Handle successful login
        console.log('Login successful');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
