import React from 'react'
import ReactDom from 'react-dom'
import {books} from './data'
import Book from'./Book'
import './index.css'



function BookList(){
  return(
    <>
      <h1>Nigerian Books</h1>
        <main>
      {books.map((book) =>{
        return(
          <section>
            <Book key={book.id} {...book}/>
          </section>
          
        )
      })}
    </main>
    </>
  )
}


ReactDom.render(<BookList/>,document.getElementById('root'))