import React from "react"
import { Link } from "gatsby"


import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact page" />
    <h1>Contact</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="container">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
    +       <input type="hidden" name="bot-field" />
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </form>
    </div>
  </Layout>
)


export default ContactPage