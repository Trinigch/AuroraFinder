import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <header>
        <h1>Aurora Finder</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
