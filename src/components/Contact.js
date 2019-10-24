import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

// render the contact details page
const Contact = ({ props, contacts }) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return <div id="no-contact-msg">Sorry, but the contact was not found</div>
  }
  return (
    <div id="contact">
      <h3>Name: {contact.name}</h3>
      <h3>Phone: {contact.phone}</h3>
      <h3>email: {contact.email}</h3>
      <div>
        <Link to='/contacts'>Back</Link>
      </div>
    </div>
  )
}

export default Contact
