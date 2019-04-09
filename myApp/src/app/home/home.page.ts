import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tamanho: any[];

  constructor(private http: HttpClient) { }
  requisicaoGet(): void {
    this.http.get('http://104.196.102.231/tamanhos')
    .subscribe((Response) => {
      console.log(Response);
    });
  }
  OnInit() {
    this.requisicaoGet();
   
  }
}
