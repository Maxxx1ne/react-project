import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Info } from './components/Info'
import { InfoCard } from './components/InfoCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <InfoCard />
    </div>
  )
}

export default App
