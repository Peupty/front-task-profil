export default class UserFormatter {
  static cardFormat(user) {
    return {
      name: formatName(user.name),
      registered: formatDate(new Date(user.registered.date)),
      picture: user.picture.large,
      nat: user.nat,
      address: formatAddress(user),
    };
  }

  static tableFormat({ name, registered, nat }) {
    return {
      name,
      registered: registered.date,
      nat,
    };
  }
}

export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return [day, month, year].map(addZero).join("-");
};

const formatName = ({ first, last }) => `${first} ${last}`;

const formatAddress = ({ location }) => {
  if (!location) return "";
  const { street, city, country } = location;
  return `${street.number} ${street.name}, ${city}, ${country}`;
};

const addZero = (x) => {
  return String(x).length < 2 ? `0${x}` : x;
};
