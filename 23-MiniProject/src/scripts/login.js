const BASE_URL = "http://localhost:3000/";
const form = document.getElementById("loginForm");

const registerBtn=document.querySelector(".registerBtn")
const loginBtn=document.querySelector(".loginBtn")

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const validation = document.querySelector(".validation");
    validation.textContent=""
try {
    const res = await axios.get(`${BASE_URL}users`);
    const users = res.data;

    const user = users.find(
        (user) => user.email === email && user.password === password
      );
console.log(user);
     

if(user){
window.location.href="index.html"
localStorage.setItem("userInfo",JSON.stringify({userId:user.id, role:user.role}))
}else{
validation.textContent="Email or password entered incorrectly!"
}
      
} catch (error) {
    console.error(error);
}
});
