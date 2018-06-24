Feature('Do something with the Useless API');

Scenario('I should be able to get all quotes', (I) => {
  I.sendGetRequest('/quotes');
});

Scenario('I should be able to get all contacts', function* (I) {
  let response = yield I.sendGetRequest('/contacts');

  I.say(JSON.stringify(response.body));
});
