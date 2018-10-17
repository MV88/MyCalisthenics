import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    const {records, dispatch} = this.props;
    return (
      <div className="dashboard">
        Dashboard
      </div>
    );
  }

  updateAndFetch({num, number, dispatch}) {
    dispatch(addNumber(num));
    dispatch(fetchWords(number + num));
  }
};

Dashboard.propTypes = {
  records: PropTypes.array,
  number: PropTypes.string
}

const mapStateToProps = state => {
  return {
    records: state.phoneword.words,
    number: state.phoneword.number
  }
}

export default connect(mapStateToProps)(Dashboard);
