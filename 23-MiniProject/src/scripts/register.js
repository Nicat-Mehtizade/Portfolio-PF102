const BASE_URL = "http://localhost:3000/";
const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const validation = document.querySelector(".validation");

try {
    const res = await axios.get(`${BASE_URL}users`);
    const users = res.data;

    const bool = users.some(
        (user) => user.username === username || user.email === email
      );

      if(!bool){
        const newUser = {
            username,
            email,
            password,
            role: "user",
            balance: 200,
            profilePictureURL:
              "https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
            favorites: [],
            accountCreationDate: new Date().toISOString().split("T")[0],
            totalSpentMoney: 0,
          };
          const addUserResponse = await axios.post(`${BASE_URL}users`, newUser);

          window.location.href="login.html"
      }else{
        validation.textContent = "Username or Email already used!";
      }

} catch (error) {
    console.error(error);
}
});

