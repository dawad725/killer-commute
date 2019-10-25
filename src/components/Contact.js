import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";

// render the contact details page
const Job = ({ props, jobs }) => {
  const clickedJob = _.find(jobs, { id: parseInt(props.match.params.id, 10) });

  if (!job) {
    return <div id="no-contact-msg">Sorry, but the job was not found</div>;
  }
  return (
    <div id="job">
      <h3>Job Title: {job.MatchedObjectDescriptor.PositionTitle}</h3>
      <h3>
        Job Summary: {job.MatchedObjectDescriptor.UserArea.Details.JobSummary}
      </h3>
      <div>
        <Link to="/search">Back</Link>
      </div>
    </div>
  );
};

export default Job;
