let test;

// 5) URLify a String
// Constant O(1)
const URLify = string => {
  newString = string.split(' ').join('%20');
  
  console.log(`\nURLified: ${string}`)
  return newString;
}

test = "tauhida parveen";
console.log(URLify(test));

test = "www.thinkful.com /tauh ida parv een";
console.log(URLify(test));


// 6) Filtering an Array
// Linear O(n)
const filterNumbersLessThan5 = arr => {
  let numsGreaterThan5 = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 5){
      numsGreaterThan5.push(arr[i])
    }
  }

  console.log(`\nNumbers greater than 5 from list: ${arr}`)
  return numsGreaterThan5;
}

test = [2, 4, 6, 8, 10];
console.log(filterNumbersLessThan5(test));

// 7) Max Sum in the Array
// Polynomial O(n^2)
const maxSumOfSet = arr => {
  let maxSum = 0;
  let sum;
  for (let i = 0; i < arr.length; i++){
    sum = arr[i];
    for (let j = i+1; j < arr.length; j++){
      sum += arr[j];
      if (sum > maxSum){
        maxSum = sum;
      }
    }
  }
  console.log(`\nMax sum from number set: ${arr}`)
  return maxSum;
}

test = [4, 6, -3, 5, -2, 1];
console.log(maxSumOfSet(test));

// 8) Merge Arrays
// Linear O(n)
const mergeArrays = (arr1, arr2) => {
  let result = Array.from(arr1);
  arr2.forEach(num => {
    for (let i = 0; i < result.length; i++){
      if (num <= result[i]){
        result.splice(i, 0, num);
        break;
      }
    }
  })

  console.log(`\nMerged arrays from sets:\n\t${arr1}\n\t${arr2}`)
  return result;
}

test = [
  [1, 3, 6, 8, 11],
  [2, 3, 5, 8, 9, 10]
];
console.log(mergeArrays(test[0], test[1]));

// 9) Remove Characters
// Polynomial O(n^2)
const removeChars = (string, charset) => {
  let newString = "";
	console.log(string)
	console.log(charset)

  for (let i = 0; i < string.length; i++){
    let addChar = true;
    for (let j = 0; j < charset.length; j++){
      if (string[i].toLowerCase() === charset[j].toLowerCase()){	
				addChar = false;
      }
    }
    if (addChar) {
      newString += string[i];
    }
  }

  console.log(`\nRemove '${charset}' from the text:\n\t"${string}"`)
  return newString;
}

test = [
  "Battle of the Vowels: Hawaii vs. Grozny",
  "AEIOU"
];
console.log(removeChars(test[0], test[1]))

// 10) Products
// Exponential O(n^2)
const products = arr => {
  let results = [];
  let ticks = 1;

  for (let i = 0; i < arr.length; i++){
    ticks++;
    let product = 1;
    for ( let j = 0; j < arr.length; j++){
      ticks++;
      if (i !== j) {
        ticks++;
        product *= arr[j];
      }
    }
    results.push(product);
  }

  console.log(`\nProducts of the dataset:\n\t${arr}\n\tTicks: ${ticks}`)
  return results;
}

test = [1, 3, 9, 4]
console.log(products(test));

// 11) 2D Array
const array2D = arr => {
  let result = [];
  let checkRow = [];
  let checkCol = [];

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[0].length; j++){
      if (arr[i][j] === 0){
        checkRow[i] = true;
        checkCol[j] = true;
      }
    }
  }

  for (let i =0; i < arr.length; i++){
    if (!result[i]){
      result[i] = [];
    }
    for (let j = 0; j < arr[0].length; j++){
      if (checkRow[i] || checkCol[j]){
        result[i][j] = 0;
      } else {
        result [i][j] = 1;
      }
    }
  }
  console.log(`Rows and Columns with 0 set to 0 in dataset:\n\t${arr}`);
  return result;
}

test = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];
console.log(array2D(test));

// 12) String Rotation
const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length){
    return false;
  }

  let twinStr1 = str1 + str1;

  console.log(`Is '${str2}' a rotation of '${str1}'?`)

  if (!twinStr1.includes(str2)){
    return false;
  } else {
    return true;
  }
}

test = [
  "amazon",
  "azonma"
];
console.log(stringRotation(test[0], test[1]));
test = [
  "amazon",
  "azonam"
];
console.log(stringRotation(test[0], test[1]));