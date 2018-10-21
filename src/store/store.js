import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { routerMiddleware } from 'react-router-redux';
// browserHistory
import { rootEpic, rootReducer } from '../modules/root';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            epicMiddleware
        )
    )
);

epicMiddleware.run(rootEpic);

export default store;
