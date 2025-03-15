import { createContext, useState } from "react";

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addBasket=(product)=>{
    const found= basket.findIndex((b)=>b.id==product.id)

    if(found==-1){
      setBasket([...basket, {...product,quantity:1}])
    }else{
      setBasket(
        basket.map((p)=>p.id == product.id ? {...p, quantity:p.quantity+1} : p)
      )
    }
  }

  return <BasketContext.Provider value={{basket,addBasket}}>
    {children}
    </BasketContext.Provider>;
};

export default BasketProvider;
