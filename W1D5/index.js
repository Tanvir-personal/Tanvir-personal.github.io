const max = (a, b) => {
    return (a > b)? a : b;
}

const maxOfThree = (a, b, c) => {
    return max(max(a,b), c);
}

const isVowel = (a) => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.includes(a.toLowerCase());
}

const sum = (a) => {
    return a.reduce((accumulator, elem) => {
        return accumulator + elem;
    }, 0);
}

const multiply = (a) => {
    return a.reduce((accumulator, elem) => {
        return accumulator * elem;
    });
}

const reverse = (str) => [...str].reduce((x,y) => y.concat(x));

const findLongestWord = (str) => str.reduce((x,y) => x.length > y.length ? x : y);

const filterLongtWords = (str, i) => str.filter(x => x.length > i); 

const myFunctionTest  = (expected, found) => {
    return (expected === found) ? "TEST SUCCEEDED" : 
        "TEST FAILED. Expected " + expected + " found " + found;
}

// console.log('max of two: ' + max(3,1));
// console.log('max of three: ' + maxOfThree(4,3,8));
// console.log(isVowel('U'));
// console.log(sum([2,3,4]));
// console.log(multiply([2,3,4]));
// console.log(reverse("proxy"));
// console.log(findLongestWord(["john", "doe", "forky", "switch", "hi"]));
// console.log(filterLongtWords(["john", "doe", "forky", "switch", "hi"], 3));

// ----- TEST METHODS to validate all functions

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel(I) is true  " + myFunctionTest(true, isVowel('I')));
console.log("Expected output of isVowel(x) is false  " + myFunctionTest(false, isVowel('x')));

console.log("Expected output of sum([2,3,4]) is 9  " + myFunctionTest(9, sum([2,3,4])));
console.log("Expected output of multiply([2,3,4]) is 24  " + myFunctionTest(24, multiply([2,3,4])));

console.log("Expected output of reverse(proxy) is yxorp  " + myFunctionTest("yxorp", reverse("proxy")));

console.log("Expected output of findLongestWord([john, doe, forky, switch, hi]) is switch  " 
    + myFunctionTest("switch", findLongestWord(["john", "doe", "forky", "switch", "hi"])));

    console.log("Expected output of filterLongtWords([john, doe, forky, switch, hi]) is [john, forky, switch]  " 
    + myFunctionTest(["john", "forky", "switch"].toString(), filterLongtWords(["john", "doe", "forky", "switch", "hi"], 3).toString()));




// ----- JS Fiddle file modifications
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

