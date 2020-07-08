const Memory  = require('./memory');

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;

    this.memory = new Memory();
    this.ptr = this.memory.allocate(this.length);
  }

  _resize(size) {
    const oldPtr = this.ptr;

    this.ptr = this.memory.allocate(size);

    if (this.ptr === null) {
      throw new Error ('Out of memory');
    }

    this.memory.copy(this.ptr, oldPtr, this.length);
    this.memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    // returns value stored at memory index
    if (index < 0 || index >= this.length){
      throw new Error('Index error');
    }
    return this.memory.get(this.ptr + index);
  }

  push(value) {
    // if you would exceed capacity
    // ...triple the size of allocated memory
    if (this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    
    this.memory.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() {
    // returns value stored at last memory index,
    // then reduces memory size by 1
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = this.memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    // places value at a specific index in memory
    // offsets all subsequent values by 1 index UP
    if (index < 0 || index > this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    this.memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    this.memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    // removes value at a specific index in memory
    // offsets all subsequent values by 1 index DOWN
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    this.memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;