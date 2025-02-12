import { Routes, Route } from 'react-router-dom'

import Homepage from "./components/Homepage.jsx"
import SingleBookDetails from './components/BookDetails.jsx'

const App = () => {
  
  return (
    <>
    <h1>Book Buddy</h1>

    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/book-details/:id' element={<SingleBookDetails />}/>
      
    </Routes>
    </>
  )
}

export default App
