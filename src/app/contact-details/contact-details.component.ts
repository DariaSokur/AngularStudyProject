import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input() contact: Contact;
  @Output() updateContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<Contact>();

  constructor() {}
  onUpdateBtnClick() {
    const newContact: Contact = { ...this.contact };
    newContact.name = 'SuperHero';
    this.updateContact.emit(newContact);
  }

  onDeleteBtnClick() {
    this.deleteContact.emit(this.contact);
  }

}
