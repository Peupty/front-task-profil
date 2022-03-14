export const fetchUser = async (url, onError) => {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    const [user] = results;
    return user;
  } catch (error) {
    onError();
  }
};

export const createOptionsUrl = (options) =>
  Object.entries(options)
    .filter(([field, value]) => value)
    .map(([field]) => field)
    .join(",");

export const createRequestUrl = (options) =>
  `https://randomuser.me/api/?inc=${options}`;
