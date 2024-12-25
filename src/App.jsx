import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <div className="container mt-4">

      <Register/>
    <Home/>
    </div>
    <Footer/>
   </div>
  );
};

export default App;
