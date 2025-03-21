const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const sortBtn = document.querySelector(".sortBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const list = document.querySelector(".list");
const modeBtn=document.querySelector(".mode")


let toDos = JSON.parse(localStorage.getItem("toDos")) || [
  {
    id: 1,
    title: "idman et",
  },
  {
    id: 2,
    title: "yemek ye",
  },
  {
    id: 3,
    title: "kod yaz",
  },
];

createList(toDos);

addBtn.addEventListener("click", () => {
  let obj = {
    title: toDoInput.value,
    id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 1,
  };

  toDos.push(obj);

  localStorage.setItem("toDos", JSON.stringify(toDos));

  list.innerHTML = "";

  createList(toDos);

  toDoInput.value = "";

  console.log(toDos);
});

sortBtn.addEventListener("click", () => {
  (list.innerHTML = ""),
    createList([...toDos].sort((a, b) => a.title.localeCompare(b.title)));
  console.log(toDos);
});

deleteBtn.addEventListener("click", () => {
  toDos = [];
  list.innerHTML = "";
  console.log(toDos);
  createList(toDos);
  localStorage.setItem("toDos", JSON.stringify(toDos));
});

function createList(arr) {
  arr.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.innerText = toDo.title;
    button.innerText = "Delete";

    button.addEventListener("click", (e) => {
      console.log(e.target, toDo.id);

      toDos = arr.filter((elem) => elem.id != toDo.id);
      list.innerHTML = "";
      createList(toDos);
  localStorage.setItem("toDos", JSON.stringify(toDos));
    });
    li.appendChild(button);
    list.appendChild(li);
  });
}

let mode=localStorage.getItem("mode") || "light"

mode==="dark" && document.body.classList.add("darkMode")

modeBtn.addEventListener("click",(e)=>{
    if(document.body.classList.contains("darkMode")){
        document.body.classList.remove("darkMode")
        e.target.textContent="Dark Mode"
        localStorage.setItem("mode","light")
    }
    else{
        document.body.classList.add("darkMode")
        e.target.textContent="Light Mode"
        localStorage.setItem("mode","dark")
    }
})
