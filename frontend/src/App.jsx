import './App.css'
import Ticket from './pages/Ticket'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Ticket />
        <Footer />
      </div>
    </>
  )
}

export default App