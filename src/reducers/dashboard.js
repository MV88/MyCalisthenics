import { CHANGE_PAGE } from '../actions/dashboard';

const assign = require('es6-object-assign').assign;

const initialState = {
    records: [],
    activePage: "dashboard"
};

export default (state = initialState, action) => {
    let updated = assign({}, state);
    switch (action.type) {
        case CHANGE_PAGE: {
            updated.activePage = action.page;
            return updated;
        }

        default:
          return state;
    }
};
