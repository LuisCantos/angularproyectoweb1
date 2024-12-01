import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  validateLogin() {
    const userCredentials = { username: 'profesor', password: 'contraseña123' };

    if (this.username === userCredentials.username && this.password === userCredentials.password) {
      this.router.navigate(['/attendance']);
    } else {
      alert('Credenciales incorrectas. Intente de nuevo.');
    }
  }
}
