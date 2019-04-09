import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  tamanhos: any[];
  sabores: any[];
  qtd: number;
  constructor(public http: HttpClient) { }

  choose(sabor: any) {
      if (!sabor.checked) {
        const count = this.sabores.filter((element) => {
          return element.checked === true;
        }).length;

      }
    }

  ngOnInit() {
    this.requisicaoGet();
  }

  requisicaoGet(): void {
    this.http.get<any>('http://104.196.102.231/tamanhos')
    .subscribe((Response) => {
      this.tamanhos = Response;
      console.log(this.tamanhos);
   });
  }

  saboresGet(idtamanho: number, qtde: number): void {
    this.http.get<any>('http://104.196.102.231/sabores/' + idtamanho)
    .subscribe((Response) => {
      this.sabores = Response;
      this.sabores.forEach(element => {
        element.checked = false;
      });

      console.log(this.sabores);   });

  }
}
