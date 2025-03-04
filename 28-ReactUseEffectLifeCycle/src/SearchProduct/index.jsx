import { useState } from "react"
import "./index.css"
const SearchProduct = ({ setSearchTerm }) => {

  return (
    <div className="searchProduct">
        <input type="text" name="" id="" placeholder="Search Products" onChange={(e)=>{setSearchTerm(e.target.value)}} />
    </div>
  )
}

export default SearchProduct