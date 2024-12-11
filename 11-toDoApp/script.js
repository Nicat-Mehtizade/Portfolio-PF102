const toDoInput=document.querySelector(".toDoInput")
const addBtn=document.querySelector(".addBtn")
const sortBtn=document.querySelector(".sortBtn")
const deleteBtn=document.querySelector(".deleteBtn")
const list=document.querySelector(".list")

let toDos=[
    {
        id:1,
        title:"idman et"
    },
    {
        id:2,
        title:"yemek ye"
    },
    {
        id:3,
        title:"kod yaz"
    }
]

createList(toDos);

addBtn.addEventListener("click",()=>{
    let obj={
        title:toDoInput.value,
    id:toDos.length >0? toDos[toDos.length-1].id+1:1,

    };
    

    toDos.push(obj);

    list.innerHTML=""

    createList(toDos);

    toDoInput.value=""

    console.log(toDos);
});

sortBtn.addEventListener("click", ()=>{
    list.innerHTML="",
    createList([...toDos].sort((a,b)=>a.title.localeCompare(b.title)))
    console.log(toDos);
})

deleteBtn.addEventListener("click", ()=>{
    toDos=[];
    list.innerHTML=""
    console.log(toDos);
    createList(toDos);  
})

function createList(arr){
arr.forEach((toDo)=>{
    const li =document.createElement("li")
    const button=document.createElement("button")

    li.innerText=toDo.title;
    button.innerText="Delete"
    
    button.addEventListener("click", (e)=>{
        console.log(e.target, toDo.id);

        toDos=arr.filter((elem)=>elem.id!=toDo.id)
        list.innerHTML=""
        createList(toDos)
    });
    li.appendChild(button);
    list.appendChild(li)
})
}
