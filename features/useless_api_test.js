Feature('Do something with the Useless API');

Scenario('I should be able to get all quotes', (I) => {
  I.sendGetRequest('/quotes');

  I.seeStatus(response, 200);
});

Scenario('I should be able to get all contacts', function* (I) {
  let response = yield I.sendGetRequest('/contacts');

  I.seeStatus(response, 200);
  I.seeInResponse(response,
    {firstName: "Karel", lastName: "Korthaar"});
});
