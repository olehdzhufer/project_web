const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, title, desc }) => `
<li id="${getItemId(id)}" class="list-group-item">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
    </div>
</li>
`;

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
  };
};

export const clearInputs = () => {
  titleInput.value = "";

  descriptionInput.value = "";
};

export const addItemToPage = ({ id, title, desc }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, desc })
  );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items){
        addItemToPage(item);
    }
};