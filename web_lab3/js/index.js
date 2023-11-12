import {
  getInputValues,
  clearInputs,
  addItemToPage,
  renderItemsList,
  fetchAndRenderItems,
  chairs,
} from "./dom_util.js";

import { postChairs, deleteChair, getAllChairs } from "./api.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("mySwitch");
const countButton = document.getElementById("count_total_price");
const deleteButton = document.getElementById("delete");
const itemsContainer = document.getElementById("items_container");

export let animals = [
  {
    id: 35,
    name: "adsdsa",
    price: "asdwqe",
  },
];

let id = 0;

const addItem = ({ id, name, price }) => {
  const newItem = {
    id,
    name,
    price,
  };
  id++;
  fetchAndRenderItems();
  postChairs(newItem)
    .then((response) => {
      if (response.ok) {
        addItemToPage(newItem);
        fetchAndRenderItems();
      } else {
        // Обробка помилок POST-запиту
        console.error("Помилка при додаванні елемента до бази даних");
      }
    })
    .catch((error) => {
      // Обробка інших помилок
      console.error("Помилка під час POST-запиту", error);
    });
};

if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    //запобігає оновленню сторінки
    event.preventDefault();
    const inputValues = getInputValues();
    if (inputValues !== null) {
      const { id, name, price } = getInputValues();

      clearInputs();

      addItem({
        id,
        name,
        price: price,
      });
    } else {
      alert("no object");
    }
  });
}

findButton.addEventListener("click", () => {
  while (itemsContainer.firstChild) {
    itemsContainer.removeChild(itemsContainer.firstChild);
  }
  const cloneForms = chairs.map((car) => ({ ...car }));
  const searchTerm = findInput.value.toLowerCase();
  const filteredCars = cloneForms.filter((car) => car.name === searchTerm);
  console.log(filteredCars);
  renderItemsList(filteredCars);
});

let counter = 0;
if (sortButton) {
  sortButton.addEventListener("click", () => {
    const sortedChairs = chairs.sort((a, b) => a.price - b.price);
    renderItemsList(sortedChairs);
    counter++;

    cloneItems = chairs;
  });
}



if (countButton) {
  countButton.addEventListener("click", () => {
    const totalAmount = chairs.reduce((total, chair) => {
      const descAsNumber = parseFloat(chair.price);
      return total + descAsNumber;
    }, 0);

    const totalAmountElement = document.getElementById("total-amount");

    totalAmountElement.textContent = totalAmount;
  });
}
if (animals) {
  renderItemsList(animals);
}
if (deleteButton) {
  // Отримуємо значення атрибуту 'data-item-id'
  const itemIdToDelete = deleteButton.getAttribute("data-item-id");

  // Перевіряємо, чи атрибут існує і має значення
  if (itemIdToDelete) {
    console.log("Значення data-item-id:", itemIdToDelete);
  } else {
    console.log("Атрибут data-item-id відсутній або має порожнє значення.");
  }
}
