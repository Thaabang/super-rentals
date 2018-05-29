import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show details for a specific rental', async function(assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Grand Old Mansion"), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });

  test('visiting /list-rentals', async function(assert) {
    await visit('/list-rentals');
    

    assert.equal(currentURL(), '/list-rentals');
  });
});
