import { helper as buildHelper } from '@ember/component/helper';

export function incomeExpense(number/*, hash*/) {
  if (number === 0) { return null; }
  return number > 0 ? 'income' : 'expense';
}

export default buildHelper(incomeExpense);
