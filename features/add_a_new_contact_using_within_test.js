let faker = require('faker');

Feature('Add a new contact using within');

Scenario('I can use elements declared within', (I) => {
  I.amOnPage('/');

  within('div.contact-form', () => {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    I.fillField('input[name=firstName]', firstName);
    I.fillField('input[name=lastName]', lastName);
    I.fillField('input[name=phone]', faker.phone.phoneNumberFormat(1));
    I.fillField('input[name=email]', faker.internet.email(firstName, lastName));
    I.fillField('input[name=addressStreet]', faker.address.streetAddress());
    I.fillField('input[name=addressPostcode]', faker.address.zipCode());
    I.fillField('input[name=addressCity]', faker.address.city());
    I.click('Save');

    I.waitForVisible('div.success');
    I.see('Contact Saved');
  });
});
