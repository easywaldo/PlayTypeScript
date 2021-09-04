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


const enum LanguageConst {
    English,
    Korean,
    Chinese,
}
let errorEnum = LanguageConst[10];  //error - invalid accessing
console.log(errorEnum);     //undefined