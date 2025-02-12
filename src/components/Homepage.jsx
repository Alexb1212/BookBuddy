import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Homepage = ({ token }) => {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {

    const getAllBooks = async() => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      console.log(response)
      const jsonObj = await response.json();
      console.log(jsonObj)
      const allBooks = jsonObj.books
      console.log(allBooks)

      setBooks(allBooks);
    }
    getAllBooks();
  }, [])

  return (
    <>
      <h2>Home Page</h2>
      {
        books.map((singleBook) => {
          return (
            <Link key={singleBook.id} to={`/book-details/${singleBook.id}`}>
              <h3>{singleBook.title}</h3>

              <img src={singleBook.coverimage} height={150} width={100}/>

            </Link>
          )
        })
      }
    </>
  )
}

export default Homepage;