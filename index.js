document.querySelector("form").addEventListener("submit", addTodo)

function addTodo(event){
 event.preventDefault()
let newItem = document.createElement("li")
let list =document.querySelector("ul")
document.getElementById("item").value
newItem.innerText = document.getElementById("item").value
newItem.addEventListener("click", completeTodo)
list.appendChild(newItem)


let button = document.createElement("button")
button.addEventListener("click", removeTodo)
button.innerText = "X"
newItem.append(button)


}
function removeTodo(event){
    event.target.parentNode.remove();
}
function completeTodo(event){
   let value = event.target.getAttribute("aria-checked");
   if (value !== "true") {
       event.target.setAttribute("aria-checked", "true")
   } else {
       event.target.setAttribute("aria-checked", "false")
   }
}