export const isValidUsername = (username) => {
  const minimunCharactersUsername = 5;
  let isValid = username.length >= minimunCharactersUsername;

  return isValid;
};

export const isValidPassword = (password) => {
  const minimunCharactersPassword = 8;
  const isValidPasswordLength = password.length >= minimunCharactersPassword;
  const hasPasswordNumber = /\d/.test(password);
  const hasPasswordUppercase = /[A-ZÁÉÍÓÚÑáéíóúñÀÈÌÒÙ]/.test(password);
  let isValid =
    isValidPasswordLength && hasPasswordNumber && hasPasswordUppercase;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  const minimumAdultAge = 18;
  let isAdult = age >= minimumAdultAge;

  return isAdult;
};
