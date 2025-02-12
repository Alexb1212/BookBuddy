import { Routes, Route } from 'react-router-dom'

import Homepage from "./components/Homepage.jsx"

const App = () => {
  
  return (
    <>
    <h1>Book Buddy</h1>

    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/book-details/:id' element={<h2>Details of books</h2>}/>
    </Routes>
    </>
  )
}

export default App
