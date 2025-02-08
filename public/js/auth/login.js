export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials =
    storedUsername === username && storedPassword === password;

  return areValidCredentials;
};
