import axios from "axios"
import {BASE_URL} from "../constants/index"
import { useEffect, useState } from "react"
import Card from "./Card"
import "./index.css"
const CardList = () => {
    const [books, setBooks]=useState([])
    const takeBooks=async()=>{
        try {
            const response= await axios(`${BASE_URL}/books`)
            console.log(response.data);
            setBooks(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        takeBooks()
    },[])

  return (
    <div className="container">  
    <h2 className="header">Books Cards</h2>
    <div className="row">
    <Card books={books} setBooks={setBooks} />
    </div>
    </div>
  )
}

export default CardList