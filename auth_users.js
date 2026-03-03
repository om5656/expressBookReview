let users = [];

const isValid = (username) => {
  return username && !users.some(u => u.username === username);
};

const authenticatedUser = (username, password) => {
  return users.some(u => u.username === username && u.password === password);
};

module.exports = { users, isValid, authenticatedUser };