export const renderUserCard = (user, srcEl) => {
  const nameTextNode = document.createTextNode(user.name);
  const imgEl = document.createElement("img");
  imgEl.src = user.picture;
  const nationalityTextNode = document.createTextNode(user.nat);
  const addressTextNode = document.createTextNode(user.address);
  const registeredDateTextNode = document.createTextNode(user.registered);
  srcEl.querySelector("#user-name").replaceChildren(nameTextNode);
  srcEl.querySelector("#user-picture").replaceChildren(imgEl);
  srcEl
    .querySelector("#user-registered")
    .replaceChildren(registeredDateTextNode);
  srcEl.querySelector("#user-nationality").replaceChildren(nationalityTextNode);
  srcEl.querySelector("#user-address").replaceChildren(addressTextNode);
};
