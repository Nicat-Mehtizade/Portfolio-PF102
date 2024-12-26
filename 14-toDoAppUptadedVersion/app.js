const toDoInput=document.getElementById("toDoInput")
const addBtn=document.querySelector(".addBtn")
const list=document.querySelector(".list")
const feedBack=document.querySelector(".feedBack")
const listSelect=document.querySelector("#listSelect")
const allDeleteBtn=document.querySelector(".deleteAll")

addBtn.addEventListener("click",()=>{
    feedBack.innerHTML=""
    if(toDoInput.value==""){
        feedBack.textContent="Please enter your text" 
        feedBack.style.color="red"   
    }
    else{
        Swal.fire({
            title: "You Have Successfully Added!",
            icon: "success",
            draggable: true
          });
      createList()
     toDoInput.value=""
    }
})

function createList(){
    let li=document.createElement("li")
    li.innerHTML=toDoInput.value
    list.append(li) 

    localStorage.setItem("listData",li)

    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="Delete"
    li.append(deleteBtn)

    deleteBtn.addEventListener("click",()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBtn.parentElement.remove()
          
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        
    })

const editBtn=document.createElement("button")
editBtn.textContent="Edit"
editBtn.classList.add("editBtn")
li.append(editBtn)

    li.addEventListener("click",()=>{
        li.classList.toggle("checked")
     
        allDeleteBtnDisplay()
    })
}

function allDeleteBtnDisplay(){
    const anyChecked=Array.from(list.children).some((li)=>
    li.classList.contains("checked"))

    if(anyChecked){
        allDeleteBtn.style.display="block"
    }else{
        allDeleteBtn.style.display="none"
    }
}

allDeleteBtn.addEventListener("click",()=>{
    const checkedItems = Array.from(list.children).filter((li) =>
        li.classList.contains("checked")
    );

    checkedItems.forEach((item) => item.remove());
    allDeleteBtnDisplay(); 
})


const selectTypes=[
    "Sort by Title Asc",
    "Sort by Title Desc",
    "Sort by Selected",
    "Sort by UnSelected",
    "Default"
]

function createCategory(){
    selectTypes.forEach((elem)=>{
        const option=document.createElement("option")
        option.textContent=elem
        listSelect.append(option)

    })
}

createCategory()

listSelect.addEventListener("change",()=>{
const listItems=[]

for(let i=0;i<list.children.length;i++){
    listItems.push(list.children[i])
}
let sortedItems;

    switch (listSelect.value) {
        case "Sort by Title Asc":
            sortedItems = listItems.sort((a, b) =>
                a.textContent
                    .toLowerCase()
                    .localeCompare(b.textContent.toLowerCase())
            );
            break;
        case "Sort by Title Desc":
            sortedItems = listItems.sort((a, b) =>
                b.textContent
                    .toLowerCase()
                    .localeCompare(a.textContent.toLowerCase())
            );
            break;
        case "Sort by Selected":
            sortedItems = listItems.filter((item) =>
                item.classList.contains("checked")
            );
            break;
        case "Sort by UnSelected":
            sortedItems = listItems.filter((item) =>
                !item.classList.contains("checked")
            );
            break;
            case "Default":
                sortedItems = listItems; 
        
            default:
                return;
        }
        list.innerHTML=""
sortedItems.forEach((item) => list.appendChild(item));
})