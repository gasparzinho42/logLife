export const containsSpecialChars = (value: string) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(value);
};
export const containsCapitalLetters = (value: string) => {
  const specialChars = /[ABCDEFGHIJKLMNOPQRSTUVXYZÇ]/;
  return specialChars.test(value);
};
export const containsNumbers = (value: string) => {
  return /\d/.test(value);
};
