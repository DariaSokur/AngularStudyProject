import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact = null;
  constructor(private contactsService: ContactsService) {}
  ngOnInit() {
    this.getContacts();
  }
  getContacts(): void {
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  }
  onContactClick(contact: Contact): void {
    this.selectedContact = contact;
  }

  onContactAdd(contactName: string, contactSurname: string) {
    this.contactsService.addContact(contactName, contactSurname)
      .subscribe(() => this.getContacts());
  }

  onContactUpdate(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.getContacts());
    this.selectedContact = null;
  }

  onContactDelete(contact: Contact) {
    this.contactsService.deleteContact(contact.id)
      .subscribe(() => this.getContacts());
    this.selectedContact = null;
  }

}


