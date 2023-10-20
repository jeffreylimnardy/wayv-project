import React, { FormEvent, useState } from 'react'
import { resolve } from 'path';
import { useSession } from 'next-auth/react';
import ContactForm from './form';

function ContactPage() {
  return (
    <ContactForm />
  )
}

export default ContactPage