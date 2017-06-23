import fetch from 'isomorphic-fetch';

export function fetchJobs() {
  return function receive(dispatch) {
    return fetch('static/list.json')
      .then(response => response.json())
      .then(json => dispatch({
        type: 'POPULATE_JOBS',
        items: json
      }));
  };
}

export function addJob(newCategory) {
  return {
    type: 'ADD_JOB',
    item: newCategory
  };
}

export function removeJob(index) {
  return {
    type: 'REMOVE_JOB',
    index
  };
}
