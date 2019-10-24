import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Contacts from './Contacts'

// Main class - holds model state
class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: localStorage.contacts ? JSON.parse(localStorage.contacts) : [],
    }
    
    this.addContact = this.addContact.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  // stores the state contacts in localStorage to persist
  setLocalStorage() {
    localStorage.contacts = JSON.stringify(this.state.contacts);
  }
  
  // method to add a new contact
  addContact (contact) {
    // concatenate new contact onto contacts array
    this.setState({contacts: this.state.contacts.concat([contact])},this.setLocalStorage);
  }

  // delete contact method
  deleteContact (contactIdx) {
    let newContacts = [...this.state.contacts]; // make copy of the array
    
    if (contactIdx !== -1) {
      newContacts.splice(contactIdx, 1); // remove contact
      this.setState({contacts: newContacts}, this.setLocalStorage);
    }
  }

  // edit contact method
  editContact (contactIdx, editedContact) {
    let newContacts = [...this.state.contacts]; // make copy of the array
    
    if (contactIdx !== -1) {
      newContacts.splice(contactIdx, 1, editedContact); // remove contact
      this.setState({contacts: newContacts}, this.setLocalStorage);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/contacts' />
          </Route>
          <Route path='/contacts' render={() => (
            <Contacts props={this.props} addContact={this.addContact} contacts={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

