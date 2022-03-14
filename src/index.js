import { renderUserCard } from "./js/renderUserCard";
import "./styles/scss/main.scss";
import UserManager from "./js/UserManager";
import UserFormatter from "./js/UserFormatter";
import { createRequestUrl, fetchUser, createOptionsUrl } from "./js/fetchUser";
import { toggleElement } from "./js/utils";

(() => {
  const userManager = new UserManager();
  const loadUserButton = document.querySelector("#generate-user");
  const hideAddressCheckbox = document.querySelector("#hide-address");

  const defaultOptions = {
    name: true,
    picture: true,
    registered: true,
    nat: true,
    location: !hideAddressCheckbox.checked || false,
  };

  const onButtonClick = async (e) => {
    const optionsUrl = createOptionsUrl(defaultOptions);
    const user = await fetchUser(createRequestUrl(optionsUrl), () =>
      alert("Error has occured")
    );

    toggleElement(
      document.querySelector("#user-address").closest(".user__info"),
      !defaultOptions.location
    );

    renderUserCard(
      UserFormatter.cardFormat(user),
      document.querySelector("#user")
    );
    userManager.addUser(UserFormatter.tableFormat(user));
  };

  loadUserButton.addEventListener("click", onButtonClick);
  hideAddressCheckbox.addEventListener("change", (e) => {
    defaultOptions.location = !e.target.checked;
  });
})();
