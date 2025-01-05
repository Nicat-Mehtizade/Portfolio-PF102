export {setDataInLocal, getDataFromLocal,calcBasketCount,calcFavoritesCount}

function setDataInLocal(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

function getDataFromLocal(key){
   return JSON.parse(localStorage.getItem(key))
}

const calcBasketCount = (basketArr) => {
    const basketCount = document.querySelector(".basket-count");
    basketCount.textContent = `(${basketArr.length})`
    basketCount.style.color="red"
  };

const calcFavoritesCount = (favoritesArr) => {
    const favoritesCount = document.querySelector(".favorites-count");
    favoritesCount.textContent = `(${favoritesArr.length})`;
    favoritesCount.style.color="red"
  };