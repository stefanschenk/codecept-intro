
'use strict';

const assert = require('assert');
const chai = require('chai');
const chaiSubset = require('chai-subset');
const expect = chai.expect;

chai.use(chaiSubset);

class UnirestHelper extends Helper {
  getId(response) {
    return response.body._id;
  }

  seeInResponse(response, json) {
    let actualJson = response.body;

    expect(response.body).to.containSubset([json]);
  }

  seeStatus(response, expectedStatus) {
    assert.strictEqual(response.status, expectedStatus,
      'Request not succesful!');
  }
}

module.exports = UnirestHelper;
