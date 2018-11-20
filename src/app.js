import 'semantic-ui-css/semantic.min.css';
import './theme/theme.css';
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Dashboard from './components/layouts/Dashboard';
import Home from './components/layouts/Home';
import MainSidebar from './components/layouts/MainSidebar';
import Progresses from './components/layouts/Progresses';
import Objectives from './components/layouts/Objectives';
import store from './store/store';

export default class ReactDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="root">
                        {/* header*/}

                        {/* Sidebar menus*/}
                        <MainSidebar>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/progresses" component={Progresses} />
                            <Route exact path="/objectives" component={Objectives} />
                        </MainSidebar>
                    </div>
                </BrowserRouter>
			</Provider>
        );
    }
}

ReactDOM.render(<ReactDemo />, document.getElementById('root'));
