Feature('Add and update a contact via the Useless API');

Scenario('I should be able to add and update a contact', function* (I) {
  let newContact = {
    firstName: "Jerrold",
    lastName: "van der Linde",
    phone: "+31663212399",
    email: "JerroldvanderLinde@yahoomail.com",
    address: {
      street: "Jan Lievensstraat 200",
      postcode: "8932 BA",
      city: "Leeuwarden"
    }
  };

  let updatedContact = {
    firstName: "Jerrold",
    lastName: "van der Linde",
    phone: "+31624098735",
    email: "j.vanderlinde@gmail.com",
    address: {
      street: "Jan Lievensstraat 204",
      postcode: "8932 BA",
      city: "Leeuwarden"
    }
  };

  let responsePost = yield I.sendPostRequest('/contacts', JSON.stringify(newContact));

  I.seeStatus(responsePost, 201);

  let contactId = yield I.getId(responsePost);

  I.sendPutRequest(`/contacts/${contactId}`, JSON.stringify(updatedContact));

  let responseGet = yield I.sendGetRequest('/contacts');

  I.seeInResponse(responseGet,
    {firstName: "Jerrold", email: "j.vanderlinde@gmail.com"});

  I.sendDeleteRequest(`/contacts/${contactId}`);
});
