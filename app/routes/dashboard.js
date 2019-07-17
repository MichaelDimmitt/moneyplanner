import { hash } from 'rsvp';
import Route from '@ember/routing/route';
export default Route.extend({

  model() {
    return hash({
      items: this.store.findAll('item'),
      accounts: this.store.findAll('account')
    });
  },

});
