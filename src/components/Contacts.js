import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Job from './Contact';
import JobNew from './ContactNew';
// import ContactEdit from './ContactEdit';
import FullContactList from './FullContactList';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }

    // this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.toggleRedirect = this.toggleRedirect.bind(this);
  }

  // // handle button click to add contact - sets redirect prop to true (cf. <Route path='/contacts' below)
  // handleButtonClick = () => {
  //   this.setState(() => ({
  //     redirect: true
  //   }))
  // }

  // // pass this prop to the ContactsNew component to enable re-initializing redirect prop
  // toggleRedirect = () => {
  //   this.setState(() => ({
  //     redirect: false
  //   }))
  // }

  render() {
    debugger
    console.log(JobNew.props);
    return (
      <Switch>
      <Route path='/search' render={(props) => (
        <JobNew props={props} contacts={this.props.contacts} addContact={this.props.addContact} toggleRedirect={this.toggleRedirect}/>
      )} />

     

      </Switch>
    )
  }
}

export default Contacts

// {this.renderRedirect()}
