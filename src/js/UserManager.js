export default class UserManager {
  constructor() {
    this.users = this.getUsers();
  }

  getUsers() {
    const usersJson = localStorage.getItem("users");
    return usersJson ? JSON.parse(usersJson): [];
  }

  _saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  addUser(user) {
    this.getUsers();

    if (this.users.length < 10) {
      this.users.push(user);
    } else {
      this.users.pop();
      this.users.unshift(user);
    }

    this._saveUsers();
  }
}
