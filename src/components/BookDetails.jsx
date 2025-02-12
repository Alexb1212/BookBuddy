import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const SingleBookDetails = () => {
  const [ bookDetails, setBookDetails ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getAllBookDetails = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      console.log(response)
      const retrievedBookDetails = await response.json();
      console.log(retrievedBookDetails.book)

      setBookDetails(retrievedBookDetails.book);
    }
    getAllBookDetails();
  }, [])

  return (
    <>
      <h2>Title: {bookDetails.title}</h2>

      <h3>Author: {bookDetails.author}</h3>

      <h3>Availability: {`${bookDetails.available}`}</h3>

      <img src={bookDetails.coverimage} height={300} width={300}/>

      <h3>Description: {bookDetails.description}</h3>
    </>
  )
}

export default SingleBookDetails;