const BASE_URL="https://randomuser.me/api/"
const list=document.querySelector(".users-info")

const loadingText=document.createElement("p")
loadingText.textContent="Loading..."
loadingText.className="loading"
list.append(loadingText)

const searchInput=document.getElementById("search")

function getData(query =""){
    axios.get(`${BASE_URL}?results=100`)
    .then((res)=>{console.log(res.data.results)
        const searchUser = res.data.results.filter((user) => {
            return (
                user.name.first.toLowerCase().includes(query.toLowerCase()) ||
                user.name.last.toLowerCase().includes(query.toLowerCase()) ||
                user.location.city.toLowerCase().includes(query.toLowerCase()) ||
                user.location.country.toLowerCase().includes(query.toLowerCase())
            );
        });
        list.innerHTML = "";
        loadingText.style.display="none"

        if(searchUser.length>0){
            createCard(searchUser)
        }else{
            list.innerHTML="<p>No results found</p>"
        }
    })
    .catch((err)=>console.log(err),
)
}

getData()
let timeout;
searchInput.addEventListener("keyup",(e)=>{
    const query=e.target.value.trim()
    clearTimeout(timeout)
    timeout=setTimeout(() => {
        getData(query)
    }, 500);
    })


function createCard(arr){
    arr.forEach((elem)=>{
        const li=document.createElement("li")

        const liImg=document.createElement("img")
        liImg.src=elem.picture.thumbnail
        liImg.className="img"

        const liContentDiv=document.createElement("div")
        liContentDiv.className="liContent"
        const userName=document.createElement("h3")
        userName.textContent=elem.name.first + " " + elem.name.last

        const userCountry=document.createElement("p")
        userCountry.textContent=elem.location.city+ " " + elem.location.country
        // userCountry.style.whiteSpace="nowrap"

        liContentDiv.append(userName,userCountry)

        li.append(liImg,liContentDiv)
        list.append(li)
    })

}

