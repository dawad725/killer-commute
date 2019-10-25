import { Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Job from './Contact'


// handles new job creation
class JobNew extends React.Component {
  constructor(props) {
    debugger;
    super(props)

    this.state = {
      jobs: [],
      selectedJob: ''
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
        if (this.state.jobs.length === 0) { alert('Sorry no matches found') }

      }).catch(function (error) {
        console.log(error);
      })
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
        
        <div>
        <Switch>
          <Route path='/search/:MatchedObjectId' render={() => (
            <Job props={this.state}/>
          )} />
        </Switch>
      </div>

        <ul className="list-group">
          {

            this.state.jobs.map(job => (
              <li className="list-group-item" key={job.MatchedObjectId}>
                <Link id="job-name-list" onClick={event => {
                  debugger; 
                  console.log(event.target.attributes[1].value);
                  let id = parseInt(((event.target.attributes[1].value)).match(/[0-9]/g).join(''),10)

                  console.log(id)
                  this.setState({selectedJob: id});
                
                }} to={`/search/${job.MatchedObjectId}`}>{job.MatchedObjectDescriptor.PositionTitle} <br></br>
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
