// interview coding practice.

const reverseString = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

const findMissingNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1
        }
    }
}

let Data = [{
    id: 1,
    name: 'John',
    age: 25,
    address: 'USA'
}, {
    id: 2,
    name: 'Smith',
    age: 30,
    address: 'UK'
}, {
    id: 3,
    name: 'David',
    age: 35,
    address: 'AUS'
}]

const findData = (id) => {
        id -= 1
        return Data.hasOwnProperty(id) ? Data[id] : 'Data not found'
    }
    // console.log(findData(1)) // can view data by id


const createData = (data) => {
        Data.push(data)
        return "Data created successfully with ID: " + data.id
    }
    // console.log(createData({
    //     id: 4,
    //     task_title: 'task4',
    //     status: 'pending',
    //     address: 'NZ'
    // }))

const updateData = (id, data) => {
    try {
        Data.splice(id - 1, 1, data)
        return "Data updated successfully with ID: " + id;
    } catch {
        console.error('Error updating data')
    }
}

// console.log(updateData(1, {
//     id: 1,
//     task_title: 'task1',
//     status: 'Completed',
//     address: 'NJ'
// }))

const deleteData = (id) => {
    id -= 1
    Data.splice(id, 1)
}

// console.log(deleteData(2))

// console.log(Data)

//================================================================================================

//================================================================================================ STACKS (LIFO)
// CHALLENGE 1: REVERSE A STRING USING STACK

const reverseStr = (str) => {
    let stack = []
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        stack.push(str[i])
        while (stack.length > 0) {
            reversedStr += stack.pop()
        }
    }
    return reversedStr;
}

// console.log(reverseStr('Hello'))
// console.log(reverseStr('World'))

// CHALLENGE 2: CHECK FOR BALANCED PARENTHESES USING STACK

const isBalanced = (str) => {
    let stack = []

    if (/^[()]+$/.test(str) === true && str.length % 2 === 0) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                stack.push(str[i])
            } else if (str[i] === ')') {
                if (stack.length === 0) {
                    return false
                }
                stack.pop()
            }
        }
    }
    return stack.length === 0
}

// console.log(isBalanced('()'))
// console.log(isBalanced('()('))
// console.log(isBalanced(')('))

// CHALLENGE 3: STACK CLASS WITH PUSH POP AND PEEK

class Stack {
    constructor(stack) {
        this.stack = []
    }

    pop() {
        return this.stack.length > 0 ? this.stack.pop() : null
    }
    push(x) {
        this.stack.push(x)
        return null
    }
    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null
    }
}

const stack = new Stack();

// console.log(stack.push(1)); // null
// console.log(stack.push(2)); // null
// console.log(stack.peek()); // 2
// console.log(stack.pop()); // 2
// console.log(stack.pop()); // 1
// console.log(stack.pop()); // null

//================================================================================================ QUEUES (FIFO)

// CHALLENGE 1: ENQUEUE AND DEQUEUE QUEUE


class QueueClass {
    constructor(queue) {
        this.queue = []
    }

    enqueue(x) {
        this.queue.unshift(x)
        return this.queue
    }

    dequeue() {
        return this.queue.shift()
    }
}

// const queue = new QueueClass();

// console.log(queue.enqueue(10)); // [10]
// console.log(queue.dequeue()); // 10

// CHALLENGE 2: LOG FIRST N NUMBERS IN ORDER

const firstNums = (num) => {
    let queue = []
    while (num > 0) {
        queue.unshift(num)
        num--
    }
    return queue;
}

// console.log(firstNums(5))

// CHALLENGE 3: REVERSE FIRST K ELEM OF QUEUE

const reverseK = (arr, k) => {
    let stack = []
    let output = []

    for(let i = (arr.length - k); i<arr.length-1; i++){
        while(stack.length-1 <= k){
            stack.push(arr[k-1])
            k--
        }
    output.push(arr[i+1])
    }
    let i=0
    while (stack.length < arr.length){
        stack.push(output[i])
        i++
    }
    return stack
}
// console.log(reverseK([1, 2, 3, 4, 5], 3))
// console.log(reverseK([1, 2, 3], 2))

//================================================================================================ SLIDING WINDOW

// CHALLENGE 1: MAX OF K SUM PAIRS IN ARRAY

const maxK = (arr, k) =>{
    let left = 0; let right = k; let output = 0;

    for (let i = left ; i<arr.length; i+=k){
        while(right < arr.length-1){
            output = arr.reduce(
                (accumulator, currentValue) => accumulator + currentValue
              );
              right+=k;
            }

        
 
        return output = Math.max(output)
    }
    // return output
}

// console.log(maxK([1, 2, 3, 4, 5], 3))

// LEARN SLIDING WINDOW LATER

//================================================================================================ PREFIX SUM

// CHALLENGE 1: RUNNING SUM OF ARR

const prefixSum1 = (arr)=>{
    let right = arr.length-1;
    let left = 0;
    while(right > left){
    for(let i =0; i < right; i++){
        arr[right] = arr[right]+ arr[i] 
    }
        right--
    }
    return arr
}

// console.log(prefixSum1([1,2,3,4]))
// console.log(prefixSum1([5, 10, 15]))

// CHALLENGE 2: SUM OF ELEM IN INDECES

const sumElem = (arr, left, right)=>{
    let output = 0;
    for(let i = left; i < right+1; i++){
        output += arr[left]
        left++
    }
    return output;
}

// console.log(sumElem([1,2,3,4], 1, 3))
// console.log(sumElem([2,4,6,8], 0, 2))

// CHALLENGE 3: SUBARRAYS EQUAL ZERO

const subZero = (arr) =>{
    let left = 0;
    let right = 1;
    let count = 0;

    for(let i = left; i< arr.length; i++){
        if(arr[i] === 0 ){
            count++
        }
        if( arr[i]+ arr[right] === 0){
            count++
        }
        if( arr[i]+ arr[right]+ arr[right+1] === 0){
            count++
        }
        right++
    }
    
    return count;
}

// console.log(subZero([1, -1, 2, -2, 3, -3]))
// console.log(subZero([0,0,0]))