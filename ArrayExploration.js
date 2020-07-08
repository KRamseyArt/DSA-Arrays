const Array = require('./Array');

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

// 2) EXPLORE THE PUSH() METHOD
  arr.push(3);
  console.log('push1' + arr);
    // length: 1; capacity: 3; address: 0
  
  arr.push(5);
  console.log('push2', arr);
    // length: 2; capacity: 3; address: 1

  arr.push(15);
  console.log('push3', arr);
    // length: 3; capacity: 3; address: 2

  arr.push(19);
  console.log('push4', arr);
    // length: 4; capacity: 12; address: 6
  
  arr.push(45);
  console.log('push5', arr);
    // length: 5; capacity: 12; address: 7
  
  arr.push(10);
  console.log('push6', arr);
    // length: 6; capacity: 12; address: 8

// 3) EXPLORING THE POP() METHOD
  arr.pop();
  console.log('pop1', arr);
    // length: 5; capacity: 12; address: 7

  arr.pop();
  console.log('pop2', arr);
    // length: 4; capacity: 12; address: 6

  arr.pop();
  console.log('pop3', arr);
    // length: 3; capacity: 12; address: 5

// 4) UNDERSTANDING MORE ABOUT HOW ARRAYS WORK
  
  // Print the 1st item in the array"
  console.log(arr.get(0))

  // Empty the array and add just 1 item "tauhida"`
  arr = new Array();
  arr.push("tauhida");
  
  // Print this 1 item that you just added. What is the result? Can you explain your result?'
  console.log(arr.get(0));
  // Returns NaN
  // Memory array can only store float values
  
  // 'What is the purpose of the "_resize()" function in your Array class?
  
  // Ensures there is enough space to hold our values when new data is added, removed, or edited
  // If not enough space, it creates a new space in memory with more available space
  // by copying the existing data and adding more open areas to fill later.

}

main();