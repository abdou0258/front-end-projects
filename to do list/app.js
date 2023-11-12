const searchInput = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.querySelector(".list");

const addChore = () => {
  const choreName = searchInput.value;

  if (choreName.trim() !== "") {
    const newChore = document.createElement("div");
    newChore.classList.add("chore");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "chore";
    checkbox.id = "chore";
    checkbox.addEventListener("click", () => {
      paragraph.style.textDecoration = checkbox.checked
        ? "line-through"
        : "none";
        paragraph.style.color = checkbox.checked
        ? "grey"
        : "black";
       
    });
    const left = document.createElement("div");
    left.classList.add("left");
    left.appendChild(checkbox);
    

    const paragraph = document.createElement("p");
    paragraph.textContent = choreName;
    left.appendChild(paragraph);
    newChore.appendChild(left);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteButton.addEventListener("click", () => {
      newChore.remove();
      
    });
    newChore.appendChild(deleteButton);

    listContainer.appendChild(newChore);

    document.querySelector(".list").style.display = "block";

    searchInput.value = "";

    
  }
};

// Event listener for the "Add" button
addBtn.addEventListener("click", addChore);

