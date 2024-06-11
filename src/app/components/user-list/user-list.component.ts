import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  @Input() item: any;
  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  redirect() {
    this.itemClick.emit(this.item);
  }

}
