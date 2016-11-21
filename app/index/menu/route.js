import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve([
          "top"
        ]);
      }, 2000);
    });
  }
});
