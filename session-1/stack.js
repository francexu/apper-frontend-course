class Stack {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        if (this.array.length <= 0) {
            console.log("Stack is currently empty.")
        } else {
            this.array.pop()
        }
    }

    check() {
        console.log(this.array);
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()
stack.pop()