import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';

class GridPhone extends Component {
  render() {
    const {words, number, dispatch} = this.props;
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

GridPhone.propTypes = {
  words: PropTypes.array,
  number: PropTypes.string
}

const mapStateToProps = state => {
  return {
    words: state.phoneword.words,
    number: state.phoneword.number
  }
}

export default connect(mapStateToProps)(GridPhone);
