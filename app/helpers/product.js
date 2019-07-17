import { helper as buildHelper } from '@ember/component/helper';

export function product(params/*, hash*/) {
  const [a, b] = params;
  return a * b;
}

export default buildHelper(product);
