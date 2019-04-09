import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;

  constructor(private http: HttpClient, public router: Router) { }

  requisicaoPost(): void {
   this.http.post('http://104.196.102.231/logon', {
     userName: (this.userName),
     password: (this.password)
   }).subscribe((Response) => {
     console.log(Response);
     this.router.navigate(['/pizza']);
   });
   }

  ngOnInit() {
  }

}
