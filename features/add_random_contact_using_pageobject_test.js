
Feature('Add a random contact using PageObject');

Scenario('I can use a PageObject', (I, ContactForm) => {
  I.amOnPage('/');

  ContactForm.addRandomContact();

  I.waitForVisible('div.success');
  I.see('Contact Saved');
});
