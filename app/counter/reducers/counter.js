const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  const counter1 = state.value + action.amount;
  const counter2 = state.value - action.amount;
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        value: counter1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        value: counter2
      });
    default:
      return state;
  }
};
