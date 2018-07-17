import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  dataSource: Observable<any>;

  // 用subscribe方法
  // stocks = [];

  // 用HTML中的pipe方法
  stocks:Observable<any>;

  constructor(public http: Http) {

    let myHeaders: Headers = new Headers;
    myHeaders.append("Authorization", "Basic 123456");

    // 用subscribe方法
    // this.dataSource = this.http.get('/api/stock').pipe(
    //   map(response => response.json())
    // )

    // 用HTML中的pipe方法
    this.stocks = this.http.get('/api/stock', {headers: myHeaders}).pipe(
      map(response => response.json())
    )
  }

  ngOnInit() {
    // 用subscribe方法
    // this.dataSource.subscribe(
    //   data => this.stocks = data
    // );

    
  }

}
