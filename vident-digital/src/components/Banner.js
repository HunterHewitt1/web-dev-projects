import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'Lead Generation',
    'Social Media Management',
    'Website Dev & SEO'
  ]
  const period = 2000
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(100)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? 'animate__animated animate__fadeIn' : ''
                    }
                  >
                    <span className="tagline">Welcome to Vident Digital</span>
                    <h1>
                      {`Elevating your online presence, driving real-world success through `}{' '}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Lead Generation", "Social Media Management", "Web Development & SEO" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <div>
                      <br></br>
                      <br></br>
                      <p id="banner-info">
                        Welcome to Vident Digital, a full-service social media
                        marketing agency. We specialize in creating and
                        executing effective social media strategies for
                        businesses of all sizes. Our team of experts are
                        dedicated to helping you connect with your target
                        audience and achieve your marketing goals. Whether
                        you're looking to increase brand awareness, drive
                        website traffic, or generate leads, we have the skills
                        and experience to help you succeed on social media. Let
                        us help you take your social media presence to the next
                        level. Contact us today to learn more about our services
                        and how we can help you achieve your business
                        objectives.
                      </p>
                      <p></p>
                    </div>
                    <button onClick={() => console.log('connect')}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Services</h2>
                <p>
                  Elevate your brand, Amplify your reach with our social media
                  marketing services
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Lead Generation</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Social Media Management</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>SEO</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
