/**
     * @desc Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId: number;
}

export const init = new defs.pet1.Order();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/store/order/{orderId}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
