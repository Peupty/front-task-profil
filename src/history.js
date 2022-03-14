import "./styles/scss/history.scss";
import UserManager from "./js/UserManager";
import UsersTable from "./js/UsersTable";

(() => {
  const userManager = new UserManager();
  const lastNameHeader = document.querySelector("#last-name");
  const registeredHeader = document.querySelector("#registered");
  const users = userManager.getUsers().map(({ registered, ...rest }) => ({
    ...rest,
    registered: new Date(registered),
  }));
  const usersTable = new UsersTable(users);
  const sorting = {
    name: true,
    registered: true,
  };

  lastNameHeader.addEventListener("click", () => {
    usersTable.sortByName(sorting.name);
    sorting.name = !sorting.name;
    usersTable.render(document.querySelector("#users tbody"));
  });

  registeredHeader.addEventListener("click", () => {
    usersTable.sortByDate(sorting.registered);
    sorting.registered = !sorting.registered;
    usersTable.render(document.querySelector("#users tbody"));
  });

  usersTable.render(document.querySelector("#users tbody"));
})();
