/* eslint-disable react/prop-types */
import DeleteButton from "./DeleteButton";
import "./index.css"
const ProductItem = ({ products, setProducts }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div className={`productItem ${product.isDiscounted ? "green" : ""}`} key={product.id}>
          <p>
            {product.name} - {product.price}$
          </p>
          <DeleteButton product={product} setProducts={setProducts}/>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
