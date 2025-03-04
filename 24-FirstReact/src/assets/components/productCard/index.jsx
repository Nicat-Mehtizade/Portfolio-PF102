import "./index.css"
import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
  return (
    <>
    <div className="product">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.category}</p>
    </div>
    </>
  )
}

export default ProductCard

ProductCard.propTypes={
    product: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
    })
}