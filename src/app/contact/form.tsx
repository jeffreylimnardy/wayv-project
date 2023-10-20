'use client'

import "%styles/ContactPage.modules.css"
import { FormEvent, useState } from "react"
import { useSession } from "next-auth/react";

export default function ContactForm(){
      const initData = {
    email:"",
    lastName: "",
    firstName: "",
    company:"",
    message:"" 
  };
  const session = useSession();
  const [data, setData] = useState(initData);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        mode: 'same-origin',
        cache: 'default',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
      });

      if (!resp.ok){
        throw new Error(`Invalid response: ${resp.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon.");
    }
    catch(error){
      console.error(error);
      alert("We can't submit the form, please try again later.");
    }
  }
  return (
    <>
      <h2 id="title">Get in touch with wayv!</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email*</label>
        <input onChange={(e)=> setData({...data, email: e.target.value})} value={data.email} id="email" type="email" required placeholder="maxmustermann@company.com" />
        { data.email === "" && <p className="requiredText">*Email is required</p> }
        <label htmlFor="last-name">Last name</label>
        <input onChange={(e) => setData({ ...data, lastName: e.target.value })} value={data.lastName}  id="last-name" type="text" placeholder="Mustermann" />
        <label htmlFor="first-name">First name</label>
        <input onChange={(e) => setData({ ...data, firstName: e.target.value })} value={data.firstName} id="first-name" type="text" placeholder="Max" />
        <label htmlFor="company">Company</label>
        <input onChange={(e) => setData({ ...data, company: e.target.value })} value={data.company} id="company" type="text" placeholder="Company name" />
        <label htmlFor="message">Message:</label>
        <textarea onChange={(e) => setData({ ...data, message: e.target.value })} value={data.message} id="message"></textarea>
        <input type="submit" value="Send Request"></input>
      </form>
    </>
  )
}