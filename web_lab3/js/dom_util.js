import { animals } from "./index.js";
import { getAllChairs, updateChair, deleteChair } from "./api.js";

const name = document.getElementById("name");
const price = document.getElementById("price");
const itemsContainer = document.getElementById("items_container");
const editNameInput = document.getElementById("edit_input_name");
const editDescriptionInput = document.getElementById("edit_input_price");
const saveButton = document.getElementById("save_form");
const editCont = document.getElementById("edit_container");
const itemContainer = document.getElementById("container part2");

const getItemId = (id) => `${id}`;

const itemTemplate = ({ id, name, price }) => `
<li id="${getItemId(id)}" class="list-group-item">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${price}</p>
        <button id="edit_button" type="button" class="card-button">Edit
</button>
        <button id="delete" type="button" class="card-button">Delete</button>
    </div>
</li>
`;

export const getInputValues = () => {
  const nameValue = name.value.trim(); // Видаляємо зайві пробіли з початку і кінця
  const priceValue = price.value.trim();

  if (nameValue === "") {
    alert("No input name");
    return null;
  } else if (priceValue === "") {
    alert("No input price");
    return null;
  } else {
    return {
      name: nameValue,
      price: priceValue,
    };
  }
};

export const clearInputs = () => {
  name.value = "";

  price.value = "";
};

export const renderItemsList = (items) => {
  if (itemsContainer) {
    itemsContainer.innerHTML = "";
  }
  for (const item of items) {
    addItemToPage(item);
  }
};

export let chairs;
export async function fetchAndRenderItems() {
  try {
    while (itemsContainer.firstChild) {
      itemsContainer.removeChild(itemsContainer.firstChild);
    }

    chairs = await getAllChairs();
    console.log(chairs);
    renderItemsList(chairs);
  } catch (error) {
    console.error("Помилка при отриманні даних з сервера", error);
  }
}

fetchAndRenderItems();

let selected_id = 0;

export const addItemToPage = ({ id, name, price }) => {
  if (itemsContainer) {
    itemsContainer.insertAdjacentHTML(
      "afterbegin",
      itemTemplate({ id, name, price })
    );
  }
  console.log(id);
  const edit_button = document.getElementById(`edit_button`);
};
if (itemContainer) {
  itemContainer.addEventListener("click", (event) => {
    if (event.target.id === "edit_button") {
      const editButton = event.target;
      const parentListItem = editButton.closest("li");
      if (parentListItem) {
        const carId = parentListItem.id;
        localStorage["editForm"] = carId;
        window.location.href = "edit_page.html";
      }
    } else if (event.target.id === "delete") {
      const deleteButton = event.target;
      const parentListItem = deleteButton.closest("li");
      if (parentListItem) {
        const chairIndex = parentListItem.id;
        deleteChair(chairIndex).then(() => {
          fetchAndRenderItems().then(() => {
            while (itemsContainer.firstChild) {
              itemsContainer.removeChild(itemsContainer.firstChild);
            }
            renderItemsList(chairs);
          });
        });
      }
    }
  });
}

let fillInputs = ({ name, price }) => {
  editNameInput.value = name;
  editDescriptionInput.value = price;
};

const getEditedInputValues = () => {
  return {
    name: editNameInput.value,
    price: editDescriptionInput.value,
  };
};

if (saveButton) {
  saveButton.onclick = async function () {
    try {
      const chairIndex = localStorage.getItem("editForm");
      console.log(chairIndex);
      const { name, price } = getEditedInputValues();
      const item = { name, price };
      console.log(item);

      // Оновлення елемента на сервері та оновлення списку
      const response = await updateChair(chairIndex, item);

      if (response.ok) {
        // Оновлення успішне, оновіть список на сторінці
        fetchAndRenderItems(); // Оновити список, запитавши дані з сервера
        editCont.style.display = "none";
      } else {
        console.error("Помилка при оновленні об'єкта на сервері");
      }
    } catch (error) {
      console.error("Помилка при оновленні об'єкта на сервері", error);
    }
  };
}
