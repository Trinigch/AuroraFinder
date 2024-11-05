import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar'
function App() {

  return (
    <>
      <header>
        <h1>Aurora Finder</h1>
        <Nav />
      </header>
    </>
  )
}

export default App
