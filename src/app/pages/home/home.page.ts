import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  photo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  segment = 'chats';
  users: User[] = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];
  chatRooms: User[] = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];

  constructor(private router: Router) { }

  onSegmentChanged(event: any) {
    console.log(event);
  }

  startChat(item: User) {
  }

  getChat(item: User) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }

}
