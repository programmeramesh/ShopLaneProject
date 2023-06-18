//Q10. Write a program to find the smallest number using a stack.
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  function findSmallestNumber(stack) {
    if (stack.isEmpty()) {
      return null;
    }
  
    let smallest = stack.peek();
  
    while (!stack.isEmpty()) {
      const item = stack.pop();
      if (item < smallest) {
        smallest = item;
      }
    }
  
    return smallest;
  }
  
  const stackData = new Stack();
  stackData.push(3);
  stackData.push(7);
  stackData.push(2);
  stackData.push(5);
  stackData.push(1);
  
  console.log("Original stackData:");
  stackData.print();
  
  const smallestNumber = findSmallestNumber(stackData);
  console.log("Smallest Number:", smallestNumber);
  