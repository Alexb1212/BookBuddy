import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Homepage from "./components/Homepage.jsx"
import SingleBookDetails from './components/BookDetails.jsx'
import NavBar from './components/NavBar.jsx'
import Login from './components/Auth.jsx'

const App = () => {
  const [ token, setToken ] = useState(localStorage.getItem('token'))
  
  return (
    <>
    <h1>Book Buddy</h1>

    <NavBar />

    <Routes>
      <Route path='/' element={<Homepage token={token} />}/>
      <Route path='/book-details/:id' element={<SingleBookDetails token={token} />}/>
      <Route path='/login' element={<Login setToken={setToken} />}/>
    </Routes>
    </>
  )
}

export default App
