enum Language {
    English,
    Spanish,
    Russian,
    Japanese,
    Korean,
    Chinese,
};

console.log(Language);


let myFirstLanguage = Language.Korean;
let mySecondLanguage = Language['English'];

console.log(myFirstLanguage, mySecondLanguage);