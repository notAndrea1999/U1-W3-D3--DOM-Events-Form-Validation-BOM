const nuovaTask = (submitTask) => {
  submitTask.preventDefault();
  const value = submitTask.target[0].value;

  const list = document.getElementById("list");
  const li = document.createElement("li");

  li.innerText = `${value}`;
  list.appendChild(li);

  const sottolinea = () => {
    li.classList.add("myList");
  };
  li.onclick = sottolinea;

  const button = document.createElement("button");
  button.classList.add("myButton");
  button.innerText = "Delete";
  li.appendChild(button);

  const elimina = () => {
    li.remove();
  };
  button.onclick = elimina;
  submitTask.target.reset();
};
