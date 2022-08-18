import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { increment } from '../redux/actions/counterActions';
import { decrement } from '../redux/actions/counterActions';

// const Counter = ({ counter, inc, dec }) => {
const Counter = () => {
  const { counter } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // inc();
          dispatch(increment());
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          // dec();
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     counter: state.counterReducer.counter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     inc: () => dispatch(increment()),
//     dec: () => dispatch(decrement()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
