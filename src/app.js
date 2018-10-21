import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/containers/Dashboard';
import { Provider } from 'react-redux';
import store from './store/store';
import 'semantic-ui-css/semantic.min.css';
import './theme/theme.css';

export default class ReactDemo extends Component {
    render() {
    return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path="/" component={Dashboard} />
                </BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<ReactDemo />, document.getElementById('root'));
