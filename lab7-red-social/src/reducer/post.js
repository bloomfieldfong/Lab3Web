import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.PRODUCT_ADDED_TO_CART: {
      const { id } = action.payload;
      const qty = state[id];

      if (typeof qty !== 'undefined') {
        return {
          ...state,
          [id]: qty + 1,
        };
      }

      return {
        ...state,
        [id]: 1,
      };
    }
    default: return state;
  }
};
