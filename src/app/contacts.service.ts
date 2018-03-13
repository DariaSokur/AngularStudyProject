import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './contacts-base';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContactsService {
  contacts: Contact[] = CONTACTS;
  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }
  constructor() { }
  // copy
  addContact(name: string, surname: string): Observable<Contact> {
    const id = Date.now();
    const newContact = {
      id,
      name,
      surname
    };
    this.contacts = [...this.contacts, newContact];
    return of(newContact);
  }

  updateContact(contact: Contact) {
    this.contacts = this.contacts.map(c => c.id === contact.id ? contact : c);

    return of(contact);
  }

  deleteContact(contactId: number) {
    this.contacts = this.contacts.filter(c => c.id !== contactId);
    return of(null);
  }
}
