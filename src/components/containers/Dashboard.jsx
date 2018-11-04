import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

// import PropTypes from 'prop-types';

import MainSidebar from '../layouts/MainSidebar';

class Dashboard extends Component {
    render() {
        return (<div className="dashboard">
            <MainSidebar/>
        </div>);
    }
}
/* Dashboard.propTypes = {
}; */
const mapStateToProps = state => {
    return {
        records: state && state.progress || []
    };
};

export default connect(mapStateToProps)(Dashboard);
