import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";

// render the contact details page
const Job = ({ props }) => {
  debugger;
  console.log('Props from ContactNew:', props)
  
  const selectJob = (props.jobs).find((job) => {
    return job.MatchedObjectId === (props.selectedJob).toString();
  })

  return (
    <div id="job">
      <h6>Job Title: {selectJob.MatchedObjectDescriptor.PositionTitle}</h6>
      <h6>
        {selectJob.MatchedObjectDescriptor.UserArea.Details.JobSummary}
      </h6>
      <h6>{selectJob.MatchedObjectDescriptor.ApplyURI[0]}</h6>
      <div>
        <Link to="/search">Back</Link>
      </div>
    </div>
  );
};

export default Job;
