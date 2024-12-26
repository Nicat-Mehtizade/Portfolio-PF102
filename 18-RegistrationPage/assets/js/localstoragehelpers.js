export {setDataInLocal, getDataFromLocal}

function setDataInLocal(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

function getDataFromLocal(key){
   return JSON.parse(localStorage.getItem(key))
}