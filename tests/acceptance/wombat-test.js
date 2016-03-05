/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: Wombat', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe("visiting /wombat", function() {
    beforeEach(function() {
      return visit('/wombat');
    });

    it('can visit /wombat', function() {
      expect(currentPath()).to.equal('wombat');
    });

    describe("selecting a new option and rolling back the model", function() {
      beforeEach(function() {
        visit('/wombat');
        select('.x-select', "Julius");
        click('.spec-rollback-btn');
        select('.x-select', 'George');
      });

      it("sets the value correctly", function() {
        expect($('.spec-model').text().trim()).to.equal('George');
      });
    });

  });
});
