const input = document.getElementById("new-item-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

addButton.addEventListener("click", function() 
{
  const text = input.value.trim();
  if (text == "") return; 

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() 
  {
    li.classList.toggle("done");
  });

  li.appendChild(checkbox);

  const textNode = document.createTextNode(text);
  li.appendChild(textNode);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-button";
  deleteBtn.addEventListener("click", function() 
  {
    list.removeChild(li);
  });
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";
});
