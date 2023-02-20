import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { InlineWidget } from 'react-calendly'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(formDetails)
    })
    setButtonText('Send')
    let result = await response.json()
    setFormDetails(formInitialDetails)
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' })
    } else {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.'
      })
    }
  }

  return (
    <section className="contact" id="connect">
      <h1>SCHEDULE YOUR CALL TODAY</h1>
      <h3>Free 30-Minute Zoom Call</h3>
      <h6>
        By the end of this strategy call, you will have a clear understanding of
        the next steps you can take for your business to start generating
        consistent and reliable results online with Social media presence & Paid
        Advertising.
      </h6>
      {/* <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      <div className="App">
        <InlineWidget
          url="https://calendly.com/vident-digital/strategy-call?background_color=73937e&text_color=ffffff&primary_color=ceb992"
          textColor="#72937d"
          styles={{
            height: '850px'
          }}
        />
      </div>
    </section>
  )
}
