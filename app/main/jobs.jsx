import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchJobs } from './actions/jobs';

class JobsComponent extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }
  render() {
    // console.log(this.props);

    return (
      <div className="jobs">
        <h3>Jobs List</h3>

        <ul className="category-list">

          {this.props.jobs.map(job =>
            <li key={job.id}>
              <p>
                <a className="re-order-icon" href={job.url}>
                  {job.name}
                </a>
                <br />
                {job.description}
              </p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

JobsComponent.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

JobsComponent.defaultProps = {
  jobs: []
};

const mapStateToProps = state => ({
  jobs: state.jobs
});

const mapDispatchToProps = {
  fetchJobs
};

const Jobs = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsComponent);

export default Jobs;
