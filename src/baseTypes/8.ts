/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Male = "male";
type Female = "female";

let Gender: Male | Female;

const myGender: typeof Gender = "male";

export {};
