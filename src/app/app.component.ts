import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginAth';

  constructor(private authService: AuthService){ }
  
  loggedIn(): boolean{
    return this.authService.loggendIn();
  }

  logout(){
    this.authService.logout();
  }
}
