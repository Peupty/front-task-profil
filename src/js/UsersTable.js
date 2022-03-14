import { formatDate } from "./UserFormatter";

export default class UsersTable {
  constructor(data) {
    this.items = data;
  }

  sortByName(asc = true) {
    this.items.sort((a, b) => {
      let v = a.name.last < b.name.last;

      if (!asc) v = !v;
      return v ? -1 : 1;
    });
  }

  sortByDate(asc = true) {
    this.items.sort((a, b) => {
      let v = a.registered < b.registered;

      if (!asc) v = !v;
      return v ? -1 : 1;
    });
  }

  createTableRow({ name: { first, last }, registered, nat }) {
    const tr = document.createElement("tr");

    [first, last, formatDate(registered), nat].forEach((el) => {
      const td = document.createElement("td");
      td.innerText = el;
      tr.appendChild(td);
    });

    return tr;
  }

  render(srcEl) {
    const rows = this.items.map(this.createTableRow);
    srcEl.replaceChildren(...rows);
  }
}
