import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from './counter';
import { incrementCounter, decrementCounter } from './actions/';

function ReduxComponent(props) {
  return (
    <div>
      <Counter
        value={props.data}
        onIncrement={() => { props.onIncrement(2); }}
        onDecrement={() => { props.onDecrement(3); }}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.counter.value
});

ReduxComponent.propTypes = {
  data: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

/*
const mapDispatchToProps = {
  onIncrement:  incrementCounter,
  onDecrement:  decrementCounter
};
*/

const mapDispatchToProps2 = dispatch => ({
  onIncrement: (amount) => {
    dispatch(incrementCounter(amount));
  },
  onDecrement: (amount) => {
    dispatch(decrementCounter(amount));
  }
});

const ReduxSample = connect(
  mapStateToProps,
  mapDispatchToProps2
)(ReduxComponent);

export default ReduxSample;
