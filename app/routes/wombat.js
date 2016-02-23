import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('wombat');
  },

  actions: {
    willTransition() {
      this._super(...arguments);

      this.controller.send('rollback');
    }
  }
});
