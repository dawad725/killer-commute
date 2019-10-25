import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'


// handles new job creation
class JobNew extends React.Component {
  constructor() {
    debugger;
    super()

    this.state = {
      jobs: []
    }

    this.handleSubmitClick = this.handleSubmitClick.bind(this)

  }

  // on submit click, search for jobs
  handleSubmitClick(e) {
    debugger;
    console.log(e)
    let jobTitle = (e.target.parentElement[0].value).split(' ').join('%20');
    let address = (e.target.parentElement[1].value).split(' ').join('%20');
    let radius = e.target.parentElement[2].value;

    axios.get(`https://data.usajobs.gov/api/Search?LocationName=${address}&PositionTitle=${jobTitle}&Radius=${radius}&ResultsPerPage=25`,
      {
        headers: {
          "Host": 'data.usajobs.gov',
          "User-Agent": 'glarsen8172@gmail.com',
          "Authorization-Key": 'qqgcoXnQV4wxs/GD37TcVW8YZC2uXG3sLMT9aiy5314='
        },
        responseType: "json",

      }).then(response => {
        debugger;
        console.log(response);
        this.setState({ jobs: response.data.SearchResult.SearchResultItems })
        console.log(this.state.jobs)
        if (this.state.jobs.length === 0) {alert('Sorry no matches found')}

      }).catch(function (error) {
        console.log(error);
      })


    // const jobSearch = {
    //   jobTitle: this.state.name,
    //   address: this.state.email,
    //   radius: this.state.phone,
    //   id: Math.round(Math.random() * 100000000)
    // };

    // this.props.addjob(newjob);
    // this.props.props.history.push('/jobs')
    // this.props.toggleRedirect();
  }





  render() {
    return (
      <div>
        <form id="job-form">
          <label>Job Title</label>
          <input placeholder='enter keyword(s)' type='text' className='form-control' onChange={event => {
            const name = event.target.value
            }
          } />

          <br />

          <label>Address</label>
          <input placeholder='your address' type='text' className='form-control' onChange={event =>
            this.setState({})
          } />

          <br />

          <label>Radius</label>
          <input placeholder='number of miles away' type='text' className='form-control' onChange={event =>
            this.setState({})
          } />

          <button id="submit-job-button" type="button" className="btn btn-primary" onClick={event => {
            this.handleSubmitClick(event)
          }}>Submit</button>
        </form>      
      
        <ul className="list-group">
          {
            this.state.jobs.map(job => (
              <li className="list-group-item" key={job.MatchedObjectId}>
                <Link id="job-name-list" to={`/search/${job.MatchedObjectId}`}>{job.MatchedObjectDescriptor.PositionTitle} <br></br>
                {job.MatchedObjectDescriptor.OrganizationName}</Link>
                
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
  export default JobNew
