import { createContext, useState } from "react";

export const FavoritesContext = createContext(null);

const FavoritesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const toggleFavs = (product) => {
    const idx = favs.findIndex((q) => q.id == product.id);

    if (idx == -1) {
      setFavs([...favs, product]);
    } else {
      setFavs(favs.filter((q) => q.id !== product.id));
    }
  };
console.log(favs);
  const clearAllFavs = () => {
    setFavs([]);
  };
  return (
    <div>
      <FavoritesContext.Provider value={{ favs, toggleFavs, clearAllFavs }}>
        {children}
      </FavoritesContext.Provider>
    </div>
  );
};

export default FavoritesProvider;
