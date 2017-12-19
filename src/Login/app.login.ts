import { Component } from '@angular/core';

// Creating custom class and decorating with @Component

@Component({
  selector: 'login-root',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css']
})
export class LoginComponent {
  title = 'app';
}
