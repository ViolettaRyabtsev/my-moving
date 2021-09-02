import React from "react"
import styled from "styled-components"
import "./contact.css"
import { Formik, Field, Form } from "formik"
import { setState } from "react"

const ContactUs = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "live message",
        }}
        onSubmit={async values => {
          return alert(JSON.stringify(values, null, 4)) 
        }}
      >
        <Form class="contact-box">
          <Field name="name" type="text" />
          <Field name="email" type="text" />
          <Field name="phone" type="text" />
          <Field name="message" class="message-box" type="text" />
          <button type="submit" class="submit-button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactUs
