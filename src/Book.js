import React from 'react'

const Book = ({image,title,author,price}) =>{
  const handleClick = (author)=>console.log(title)
  const example = (author)=>{console.log(author)}
  return(
    <section className="book-list">
      <article>  
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{author}</p>
        <button type="button" onClick={()=>handleClick(title)}>Click Me</button>
        <button type="button" onClick={()=>example(author)}>example</button>
        </article>
    </section>
  )
}

export default Book