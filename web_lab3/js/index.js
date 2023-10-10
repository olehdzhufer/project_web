import {
  getInputValues,
  clearInputs,
  addItemToPage,
  renderItemsList,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("mySwitch");
const countButton = document.getElementById("count_total_price");

let animals = [];

const addItem = ({ title, desc }) => {
  const generatedId = uuid.v1();

  const newItem = {
    id: generatedId,
    title,
    desc,
  };

  animals.push(newItem);

  addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
  //запобігає оновленню сторінки
  event.preventDefault();

  const { title, description } = getInputValues();

  clearInputs();

  addItem({
    title,
    desc: description,
  });
});

findButton.addEventListener("click", () => {
  const foundAnimals = animals.filter(
    (animal) => animal.title.search(findInput.value) !== -1
  );

  renderItemsList(foundAnimals);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(animals);

  findInput.value = "";
});

sortButton.addEventListener("click", () => {
  const sortedAnimals = animals.sort((a, b) => b.desc - a.desc);

  renderItemsList(sortedAnimals);
});

countButton.addEventListener("click", () => {
  const totalAmount = animals.reduce((total, animal) => {
    const descAsNumber = parseFloat(animal.desc);
    return total + descAsNumber;
  }, 0);

  const totalAmountElement = document.getElementById("total-amount");

  totalAmountElement.textContent = totalAmount;
});

renderItemsList(animals);
