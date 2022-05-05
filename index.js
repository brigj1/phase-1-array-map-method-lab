const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// numbers.map((num) => Math.sqrt(num));


function titleCased () {
  return tutorials.map(phrase => titleCase(phrase))
}


function titleCase(phrase) {
  return phrase.split(' ').map(word => ucFirst(word)).join(' ')
}
//console.log(titleCase('The Test Driven Development Workflow'));


function ucFirst (word) {
  return word.charAt(0).toUpperCase() + word.slice(1) // .toLowerCase()
}
//console.log(ucFirst('between'));


//console.log(titleCased());