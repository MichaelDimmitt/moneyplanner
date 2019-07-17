import { helper } from '@ember/component/helper';

export default helper(function incomeExpense(number/*, hash*/) {
  if (number === 0) { return null; }
  return number > 0 ? 'income' : 'expense';
})