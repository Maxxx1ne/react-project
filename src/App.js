import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Info } from './components/Info'
import { InfoCard } from './components/InfoCard'
import { InfoFooter } from './components/InfoFooter'
import { Projects } from './components/Projects'
import { Reviews } from './components/Reviews'

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
    </div>
  )
}

export default App
