import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// reducers

import reducerProgress from '../reducers/progress';
import reducerDashboard from '../reducers/dashboard';

// epics
import epicProgress from '../epics/progress';

export const rootEpic = combineEpics(
    ...epicProgress
);

export const rootReducer = combineReducers({
  progress: reducerProgress,
  dashboard: reducerDashboard
});
