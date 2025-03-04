import ProductCard from "./assets/components/productCard";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      description:
        "High-quality noise-canceling wireless headphones with long battery life.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      category: "Accessories",
      description:
        "Ergonomic gaming mouse with customizable RGB lighting and programmable buttons.",
    },
    {
      id: 3,
      name: "Smartwatch",
      category: "Wearables",
      description:
        "Feature-rich smartwatch with heart rate monitoring and GPS tracking.",
    },
    {
      id: 4,
      name: "Backpack",
      category: "Fashion",
      description:
        "Durable and stylish backpack with multiple compartments for organization.",
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home Appliances",
      description:
        "Automatic coffee maker with programmable timer and multiple brew settings.",
    },
  ];
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default App;
