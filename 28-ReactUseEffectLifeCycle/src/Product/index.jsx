import { useState } from 'react';
import AddProduct from '../AddProduct'
import SearchProduct from '../SearchProduct'
import ProductsList from './ProductsList'

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <div>
         <AddProduct setProducts={setProducts}/>
         <SearchProduct setSearchTerm={setSearchTerm}/>
         <ProductsList products={products} setProducts={setProducts} searchTerm={searchTerm}/>
    </div>
  )
}

export default Product