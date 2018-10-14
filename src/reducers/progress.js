import { TODO } from '../actions/progress';

const assign = require('es6-object-assign').assign;

const initialState = {
    records: []
};

export default (state = initialState, action) => {
    let updated = assign({}, state);
    switch(action.type) {
        case TODO: {
            updated['records'] = action.records;
            return updated;
        }

        default:
          return state;
    }
};
