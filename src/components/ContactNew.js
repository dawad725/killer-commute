import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'


// handles new contact creation
class ContactNew extends React.Component {
  constructor() {
    debugger;
    super()

    this.state = {
      jobs: []
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    
  }

  // on submit click create contact, set path back to /contacts re-initialize redirect
  handleSubmitContactClick(e) {
    debugger;
    console.log(e)
    let jobTitle = e.target.parentElement[0].value;
    let address = e.target.parentElement[1].value;
    let radius = e.target.parentElement[2].value;

    axios.get('https://data.usajobs.gov/api/Search?LocationName=Durham,%20NC&PositionTitle=IT&Radius=25&ResultsPerPage=25',
      {
        headers: {
          "Host": 'data.usajobs.gov',
          "User-Agent": 'glarsen8172@gmail.com',
          "Authorization-Key": 'qqgcoXnQV4wxs/GD37TcVW8YZC2uXG3sLMT9aiy5314='
        },
        responseType: "json",

      }).then(response => {
        
        console.log(response);
        this.setState({jobs: response.data.SearchResult.SearchResultItems})
        // this.populateJobs(response);
        
        
      }).catch(function (error) {
        console.log(error);
      })  
    
      
    // const jobSearch = {
    //   jobTitle: this.state.name,
    //   address: this.state.email,
    //   radius: this.state.phone,
    //   id: Math.round(Math.random() * 100000000)
    // };

    // this.props.addContact(newContact);
    // this.props.props.history.push('/contacts')
    // this.props.toggleRedirect();
  }



  

  render() {
    return (
      <div>
        <form id="contact-form">
          <label>Job Title</label>
          <input type='text' className='form-control' onChange={event => {
            const name = event.target.value
            // this.setState({ jobTitle: jobTitle })
          }
          } />

          <br />

          <label>Address</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({})
          } />

          <br />

          <label>Radius</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({  })
          } />

          <button id="submit-contact-button" type="button" className="btn btn-primary" onClick={event =>      {this.handleSubmitContactClick(event)
          }}>Submit</button>
        </form>

        <Link to='/search' id="return-to-contacts" onClick={this.props.toggleRedirect}>Contacts</Link>
      </div>
    )
  }
}

export default ContactNew
