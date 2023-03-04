// NUMBER 1

"i- Mutating methods are ones that change the original array after the method has been used examples are array.pop(), array.push() array.splice() array.slice(), array.shift().";
"ii- Non - mutating methods do not change the original array eg array.indexOf(),array.reverse(), array.concat(), array.filter(), array.map(). ";

// NUMBER 2
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// i
languages.push("Kotlin");

// ii
languages.splice(3, 0, "Java");

// iii
languages.splice(0, 1);

// iv
languages.splice(0, 0, "Scala", "Swift");

// v
languages.splice(5, 1, "Go", "Rust");

console.log(languages);

// NUMBER 3
["apple", "mango", "orange"];

// NUMBER 4
const nums = [71, 42, 54];

const maxValue = (arr) => {
  return "Maximum value is " + Math.max(...arr);
};

console.log(maxValue(nums));

// NUMBER 5

const numbers = [2, 4, 7, 5];

const valTimesIndex = (numbers) => {
  return numbers.map((num) => {
    return num * numbers.indexOf(num);
  });
};

console.log(valTimesIndex(numbers));
