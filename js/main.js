console.log("Bienvenid@s a ToDo list App ! 🎈")

const input = document.querySelector("input");
const buttonAddTask = document.querySelector(".button_add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");



buttonAddTask.addEventListener("click", (e) => {
  e.preventDefault()

  const task = input.value

  if(task != ""){
    const li = document.createElement('li')
    const p = document.createElement('p')
  
    p.textContent = task
  
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(deleteTask())
    
    input.value = ""
    empty.style.display = "none"
  }

 
})


const deleteTask = () => {

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "x"
  deleteButton.className = "button-delete"

  deleteButton.addEventListener("click", (e)=>{
    const item = e.target.parentElement
    ul.removeChild(item)

    const items = document.querySelectorAll("li")
    if (items.length == 0){
      empty.style.display = "block"
    }
  })
  return deleteButton


}


