
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/nav/Navbar'

function App() {

  return (
    <div className="dark:bg-slate-800">
      <div className="max-w-5xl mx-auto min-h-screen dark:bg-slate-800">
        
        <Navbar />

        <Outlet />
      </div>
    </div>
  )
}

export default App
