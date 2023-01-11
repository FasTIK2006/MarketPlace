import { Component } from '@angular/core'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  isLogged: boolean = false;
  Username: string = '';

  constructor(public authService: AuthService) {
    this.checkUser();
  }

  checkUser(): void {
    let user_str = localStorage.getItem('userinfo');
    if (user_str === null) {
      return;
    } else {
      let user = JSON.parse(user_str);
      this.Username = user.name;
      this.isLogged = true;
    }
  }

  logout(): void {
    this.Username = '';
    this.isLogged = false;
  }


};


