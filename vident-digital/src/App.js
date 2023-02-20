import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Aboutus } from './components/About-us'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vident Digital</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Social Media Marketing" />
      </Helmet>
      <NavBar />
      <Banner />
      <Aboutus />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
