import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import ContactEdit from './ContactEdit';
import FullContactList from './FullContactList';

class Contacts extends React.Component {

  constructor() {
    super();

    this.state = {
      redirect: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleRedirect = this.toggleRedirect.bind(this);
  }

  // handle button click to add contact - sets redirect prop to true (cf. <Route path='/contacts' below)
  handleButtonClick = () => {
    this.setState(() => ({
      redirect: true
    }))
  }

  // pass this prop to the ContactsNew component to enable re-initializing redirect prop
  toggleRedirect = () => {
    this.setState(() => ({
      redirect: false
    }))
  }

  render() {
    debugger
    return (
      <Switch>
        <Route path='/search' render={(props) => (
          <ContactNew props={props} contacts={this.props.contacts} addContact={this.props.addContact} toggleRedirect={this.toggleRedirect}/>
        )} />

        <Route exact path='/search/:id' render={(props) => (

          <Contact props={props} contacts={this.props.contacts} />

        )} />

        <Route path='/search' render={() => {
         if (this.state.redirect) {
           return <Redirect to='/search' />
         }
         return (
          <div>
            <span>
              
              <h2>Contacts</h2>

              <button id="add-contact-button" className="btn btn-primary" onClick={this.handleButtonClick} >Add Contact</button>
            </span>

            <FullContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact} />
          </div>
          )
        } }/>
      </Switch>
    )
  }
}

export default Contacts

// {this.renderRedirect()}
