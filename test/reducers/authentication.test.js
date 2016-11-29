import { CHANGE_AUTH } from '../../src/actions/types';
import { expect } from '../test_helper';

import authenticationReducer from '../../src/reducers/authentication';


describe('Reducers', () => {
  describe('authenticationReducer', () => {
    it('no action is passed', () => {
      expect(authenticationReducer({})).to.eql({});
    });

    it('action with unknown type', () => {
      const action = { type: 'unknown', payload: 123 };
      expect(authenticationReducer({}, action)).to.eql({});
    });

    it('action with correct type', () => {
      const action = { type: CHANGE_AUTH, payload: 123 };
      expect(authenticationReducer({}, action)).to.eql(123);
    });

    it('action without payload', () => {
      const action = { type: CHANGE_AUTH };
      expect(authenticationReducer({}, action)).to.eql({});
    });
  });
});
