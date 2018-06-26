'use strict';

const faker = require('faker');

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here
  fields: {
    firstName: 'input[name=firstName]',
    lastName: 'input[name=lastName]',
    phone: 'input[name=phone]',
    email: 'input[name=email]',
    address: {
      street: 'input[name=addressStreet]',
      postcode: 'input[name=addressPostcode]',
      city: 'input[name=addressCity]'
    }
  },
  saveButton: 'button[value=Save]',
  updateButton: 'button[value=Update]',
  deleteButton: 'button[value=Delete]',

  addRandomContact() {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.lastName, lastName);
    I.fillField(this.fields.phone, faker.phone.phoneNumberFormat(1));
    I.fillField(this.fields.email, faker.internet.email());
    I.fillField(this.fields.address.street, faker.address.streetAddress());
    I.fillField(this.fields.address.postcode, faker.address.zipCode());
    I.fillField(this.fields.address.city, faker.address.city());
    I.click(this.saveButton);
  }
};
