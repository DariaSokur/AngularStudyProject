import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  @Input() contacts: Contact[] = [];
  @Output() selectContact = new EventEmitter<Contact>();
  @Output() addContact = new EventEmitter<String>();
  constructor() {}
  onContactClick(contact: Contact) {
    this.selectContact.emit(contact);
  }
  addContactBtnClick() {
    this.addContact.emit('New contact');
  }
}
