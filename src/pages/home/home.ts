import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: any;
  constructor(public navCtrl: NavController, private contacts: Contacts, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }


  logForm() {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, this.todo.surname, this.todo.name);
    contact.phoneNumbers = [new ContactField('mobile', this.todo.phone)];
    contact.save().then(
      () => alert('Contact saved!'),
      (error: any) => console.error('Error saving contact.', error)
    );
  }

}
