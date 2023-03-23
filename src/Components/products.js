import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './header';
import { Footer } from './footer';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from './button';
import { Badge } from "react-bootstrap"

function Products(){
   const data = [
      { 
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71kxa1-0mfL.jpg",
        productName : "1984",
        author : "George Orwell",
        price : "1254.03",
        rating : "⭐⭐⭐⭐" 
    },

    {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL.jpg",
        productName : "The Lord of the Rings",
        author : "J.R.R. Tolkien",
        price : "2332.00",
        rating : "⭐⭐⭐⭐⭐"
     },
     
     { 
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81IzbD2IiIL.jpg",
        productName : "The Kite Runner",
        author : "Khaled Hosseini",
        price : "409.00",
        rating : "⭐⭐⭐"
     },

     {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81m1s4wIPML.jpg",
        productName : "Harry Potter ",
        author : "J.K. Rowling",
        price : "249.00",
        rating : "⭐⭐⭐⭐⭐"
     },

     {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81PWUQgQ2uL.jpg",
        productName : "Slaughterhouse-Five",
        author : "Kurt Vonnegut",
        price : "1744.00",
        rating : "⭐⭐⭐⭐"
    },

     {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81sgDQRRzkL.jpg",
        productName : "The Lion, the Witch ",
        author : "C.S. Lewis",
        price : "250.00",
        rating : "⭐⭐⭐⭐⭐"
     },

     {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg",
        productName : "To Kill a Mockingbird",
        author : "Harper Lee",
        price : "130.00",
        rating : "⭐⭐⭐"
      },
     

       {
        productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71H52+sSb4L.jpg",
        productName : "The Book Thief",
        author : "Markus Zusak",
        price : "362.00",
        rating : "⭐⭐⭐⭐⭐"
       }
 ]
       
 
   const [count,setCount] = useState(0);

    return(
<div>
    <Header />
    <span className="cart">
    <Badge bg="success"> <img src= "https://img.icons8.com/bubbles/30/null/add-shopping-cart.png" />{count} </Badge>
    <Badge bg="success"> <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/null/external-wishlist-cyber-monday-flaticons-flat-flat-icons.png" /> </Badge>
</span>
        <div  className = 'products'>
            {data.map((item,index)=><Display
               item = {item}
               index = {index}
               count = {count}
               setCount = {setCount}
               />)}
        </div>
    <Footer />
   </div>
    )
}

export default Products

function Display({item,index,count,setCount}){

   const [show,setShow] = useState(true);

   function addToCart(){
       setShow(!show)
       setCount(count +1)
   }

   function removeFromCart(){
       setShow(!show)
       setCount(count -1)
   }
  return(
   
      <div className='cards'>
      <Card key={index}>
    <Card.Img className='images' variant="top" src={item.productImage} />
    <Card.Body>
      <Card.Title>{item.productName}</Card.Title>
      <Card.Text>
        <span style={{color:'black',fontWeight:'bold'}}>Author : </span>{item.author}
      </Card.Text>
      <Card.Text>
      Rs. {item.price}
    </Card.Text>
    <Card.Text>
    {item.rating}
  </Card.Text>
  
  {show ? <Button 
   name = 'Add to Cart'
   bgclr='darkblue'
   clr='white'
   onclick={addToCart}
   /> :' '}

  {!show ? <Button 
  name = 'Remove from Cart'
  bgclr='red'
  clr='white'
  onclick={removeFromCart}
  /> :' '}
    </Card.Body>
  </Card>
      </div>
  )
}