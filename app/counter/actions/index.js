export function incrementCounter(amount) {
  return {
    type: 'INCREMENT',
    amount
  };
}

export function decrementCounter(amount) {
  return {
    type: 'DECREMENT',
    amount
  };
}
