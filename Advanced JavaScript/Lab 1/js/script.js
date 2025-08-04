const linkedList = {
  data: [],

  exists(value) {
    return this.data.some((item) => item.val === value);
  },

  isNumber(value) {
    return typeof value === "number";
  },

  findInsertIndex(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (value < this.data[i].val) {
        return i;
      }
    }
    return this.data.length;
  },

  unshift(value) {
    if (!this.isNumber(value)) throw new Error("Only numbers allowed");
    if (this.exists(value)) throw new Error("Duplicate value not allowed");

    if (this.data.length === 0) {
      this.data.unshift({ val: value });
      return;
    }

    const first = this.data[0].val;

    if (first > value) {
      const index = this.findInsertIndex(value);
      this.data.splice(index, 0, { val: value });
    } else {
      throw new Error(`${value}: can't be inserted at the beginning`);
    }
  },

  push(value) {
    if (!this.isNumber(value)) throw new Error("Only numbers allowed");
    if (this.exists(value)) throw new Error("Duplicate value not allowed");

    if (this.data.length === 0) {
      this.data.push({ val: value });
      return;
    }

    const last = this.data[this.data.length - 1].val;

    if (last < value) {
      const index = this.findInsertIndex(value);
      this.data.splice(index, 0, { val: value });
    } else {
      throw new Error(`${value}: can't be inserted at the end`);
    }
  },

  insert(value) {
    if (typeof value !== "number") throw new Error("Only numbers allowed");
    if (this.exists(value)) throw new Error("Duplicate value not allowed");

    const index = this.findInsertIndex(value);
    this.data.splice(index, 0, { val: value });
  },

  pop() {
    if (this.data.length === 0) {
      console.log("List is empty");
      return;
    }
    return this.data.pop();
  },

  dequeue() {
    if (this.data.length === 0) {
      console.log("List is empty");
      return;
    }
    return this.data.shift();
  },

  remove(value) {
    const index = this.data.findIndex((item) => item.val === value);
    if (index === -1) {
      console.log("Data not found");
    } else {
      this.data.splice(index, 1);
    }
  },

  display() {
    if (this.data.length === 0) {
      console.log("List is empty");
    } else {
      console.log(this.data.map((item) => item.val).join(" -> "));
    }
  },
};

const ll = Object.create(linkedList);
ll.data = [];

// ll.unshift(2); // OK
// ll.unshift(5); // OK
// ll.unshift(10); // OK
// ll.display(); // Expected: 2 -> 5 -> 10

// // ll.unshift(5);           // Error: Duplicate value not allowed

// // ll.unshift("hello");     // Error: Only numbers allowed

// ll.insert(3); // OK
// ll.display(); // Expected: 2 -> 3 -> 5 -> 10

// ll.insert(9);

// ll.insert(4);

// ll.insert(-2); // OK: inserted at the beginning
// ll.insert(-1); // OK: keeps sorted order
// ll.display(); // Expected: -2 -> -1 -> 2 -> 3 -> 5 -> 10

// ll.remove(100); // "Data not found"

// ll.remove(3); // Removes 3
// ll.display(); // Expected: -2 -> -1 -> 2 -> 5 -> 10

// ll.pop(); // Removes 10
// ll.dequeue(); // Removes -2
// ll.display(); // Expected: -1 -> 2 -> 5
