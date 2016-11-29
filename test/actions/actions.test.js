import { expect } from '../test_helper.js';

import { authenticate } from '../../src/actions';
import { CHANGE_AUTH } from '../../src/actions/types';


describe('Actions', () => {
  describe('authenticate', () => {
    it('correct type', () => {
      const { type } = authenticate();

      expect(type).to.equal(CHANGE_AUTH);
    });

    describe('payload types', () => {
      it('payload:undefined', () => {
        const { payload } = authenticate();
        expect(payload).to.equal(false);
      });

      it('payload:NaN', () => {
        const { payload } = authenticate(NaN);
        expect(payload).to.equal(false);
      });
    });
  });
});
