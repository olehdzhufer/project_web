import { animals } from "./index.js";

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");
const editNameInput = document.getElementById("edit_input_name");
const editDescriptionInput = document.getElementById("edit_input_price");
const saveButton = document.getElementById("save_form");
const editCont = document.getElementById("edit_container");

const getItemId = (id) => `${id}`;

const itemTemplate = ({ id, title, desc }) => `
<li id="${getItemId(id)}" class="list-group-item">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
        <button id="edit_button" type="button" class="card-button">
            Edit
        </button>
    </div>
</li>
`;

export const getInputValues = () => {
  if (titleInput.value === "") {
    alert("No input name");
  } else if (descriptionInput.value === "") {
    alert("No input price");
  } else {
    return {
      title: titleInput.value,
      description: descriptionInput.value,
    };
  }
};

export const clearInputs = () => {
  titleInput.value = "";

  descriptionInput.value = "";
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

let selected_id = 0;
export const addItemToPage = ({ id, title, desc }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, desc })
  );
  const edit_button = document.getElementById(`edit_button`);
  edit_button.onclick = function () {
    selected_id = id;
    editCont.style.display = "flex";
    fillInputs({ title, description });
  };
};

let fillInputs = ({ title, description }) => {
  editNameInput.value = title;
  editDescriptionInput.value = description;
};

saveButton.onclick = function () {
  let editItem = animals.find((e) => e.id === selected_id);
  if (editItem) {
    const { title, description } = getEditedInputValues();
    editItem.title = title;
    editItem.desc = description;
  }
  renderItemsList(animals);
  editCont.style.display = "none";
};

const getEditedInputValues = () => {
  return {
    title: editNameInput.value,
    description: editDescriptionInput.value,
  };
};
