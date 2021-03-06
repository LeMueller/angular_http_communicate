import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(public wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.connect("ws://localhost:8081").subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('服务器链接断开')
    );
  }

  send() {
    this.wsService.send('这是从客户端发来的消息');
  }

}
