import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Aboutus = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="project-title">
              <h2>About Us</h2>
              <div className="about-us">
                <p className="about-copy">
                  At Vident Digital, we believe that social media is more than
                  just a marketing tool - it's a powerful way to connect with
                  your target audience and build meaningful relationships. We
                  are a team of experienced social media experts who are
                  passionate about helping businesses of all sizes succeed on
                  social media.
                </p>
                <p className="about-copy">
                  We understand that every business is unique and that's why we
                  take a personalized approach to social media marketing. We
                  work closely with our clients to understand their business
                  goals and target audience, and then we create and execute a
                  customized social media strategy that is tailored to their
                  specific needs.
                </p>
                <p className="about-copy">
                  Our services include social media account management, content
                  creation, advertising, reputation management, and analytics.
                  Our team of experts is skilled in using the latest social
                  media platforms, tools and technologies. We continuously
                  strive to keep up-to-date with the latest trends and best
                  practices in social media marketing, so you can trust that
                  your social media presence is in good hands.
                </p>
                <p className="about-copy">
                  We pride ourselves on delivering measurable results for our
                  clients. Whether you're looking to increase brand awareness,
                  drive website traffic, or generate leads, we have the skills
                  and experience to help you succeed on social media.
                </p>
                <p className="about-copy">
                  If you're ready to take your social media presence to the next
                  level, we would love to hear from you. Contact us today to
                  learn more about our services and how we can help you achieve
                  your business objectives.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
