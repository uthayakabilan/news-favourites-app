export const isEmailValid = (email) => {
  if (email.length > 5 && email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
};

export const isPasswordValid = (password) => {
  if (password.length > 5) {
    return true;
  } else {
    return false;
  }
};
