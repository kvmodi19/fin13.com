import { Component, OnInit } from '@angular/core';

interface User {
  email: string;
  password: string;    
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = {} as User;
  }

  onSubmit() {
    
  }

}
