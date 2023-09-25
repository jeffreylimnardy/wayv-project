import React from 'react'
import "%styles/Form.modules.css"

function ContactPage() {
  return (
    <form id="contact-form">
      <label htmlFor="last-name">Last name</label><br/>
      <input id="last-name" type="text" placeholder="Mustermann" /><br />
      <label htmlFor="first-name">First name</label><br/>
      <input id="first-name" type="text" placeholder="Max" />
    </form>
  )
}

export default ContactPage