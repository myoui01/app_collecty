import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  name: string = 'Chat';
  message: string = '';
  isLoading = false;
  currentUserId = 1;
  chats = [
    {id: 1, sender: 1, message: 'oi mona e essa winter babado aii'},
    {id: 2, sender: 2, message: 'errr!'},
  ];

  constructor() { }


  sendMessage() {}

}
