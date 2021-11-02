import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,
              private router: Router) { }

  user = {
    email : '',
    password: ''
  }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private']);
      },
      err => console.log(err)
    )

}

}

