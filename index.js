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
  return Math.max(...arr);
};

console.log(maxValue(nums));

// NUMBER 5
