import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    changePage
} from '../../actions/dashboard';

import PropTypes from 'prop-types';

import MainSidebar from '../layouts/MainSidebar';

class Dashboard extends Component {
    render() {
        const {
            onChangePage,
            active
        } = this.props;
        return (<div className="dashboard">
            <MainSidebar onChangePage={onChangePage} active={active}/>
        </div>);
    }
}
Dashboard.propTypes = {
    onChangePage: PropTypes.func,
    active: PropTypes.string
};
const mapStateToProps = state => {
    return {
        records: state && state.progress || [],
        active: state && state.dashboard && state.dashboard.activePage
    };
};

const mapDispatchToProps = {
    onChangePage: changePage
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
