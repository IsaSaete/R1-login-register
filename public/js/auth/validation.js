export const isValidUsername = (username) => {
  const usernameMinimumLength = 5;
  let isValid = username.length >= usernameMinimumLength;

  return isValid;
};

export const isValidPassword = (password) => {
  const passwordMinimumLentgth = 8;
  const isValidPasswordLength = password.length >= passwordMinimumLentgth;
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
