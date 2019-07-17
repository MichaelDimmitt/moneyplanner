import { computed } from '@ember/object';
import { lt, gt } from '@ember/object/computed';
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  deleted: attr('boolean', { defaultValue: false }),
  name: attr(),
  amount: attr('number'),
  transferAmount: computed('amount', function() {
    return this.get('amount') * -1;
  }),
  account: belongsTo('account', {inverse: 'items', autoSave: true}),
  accountId: attr(),
  transferAccount: belongsTo('account', { inverse: 'transferItems', autoSave: true }),
  income: gt('amount', 0),
  expense: lt('amount', 0),

  transferIncome: gt('transferAmount', 0),
  transferExpense: lt('transferAmount', 0),
});
