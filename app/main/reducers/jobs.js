const initialState = [];

export default (state = initialState, action) => {
  const newArray = state.slice();
  switch (action.type) {
    case 'POPULATE_JOBS':
      return action.items.slice();
    case 'ADD_JOB':
      newArray.push(action.item);
      return newArray;
    case 'REMOVE_JOB':
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};
