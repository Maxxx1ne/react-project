import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Info } from './components/Info'
import { InfoCard } from './components/InfoCard'
import { InfoFooter } from './components/InfoFooter'
import { Projects } from './components/Projects'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'
import { FooterInfo } from './components/FooterInfo'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <InfoCard />
      <InfoFooter />
      <Projects />
      <Reviews />
      <Footer />
      <FooterInfo />
    </div>
  )
}

export default App
