# basic-typescript-1

<details>

<summary>

  <h4> What is TypeScrip
? (Click Me)</h4>
</summary>

<br >

<h4> 
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

However, TypeScript adds features that are not available in JavaScript, such as optional static type annotations, interfaces, classes, namespaces, and modules. These additional features make it easier to write and maintain large-scale JavaScript applications by catching errors at compile-time rather than runtime.

TypeScript also includes a compiler that compiles TypeScript code to plain JavaScript code that can run in any modern web browser or server environment. TypeScript can be used for both client-side and server-side development, as well as for writing Node.js applications.

</h4>

---

<h4> 
বাংলা ঃ  
টাইপস্ক্রিপ্ট হল একটি প্রোগ্রামিং ভাষা যা মাইক্রোসফট তৈরি করেছে। এটি জাভাস্ক্রিপ্টের সাথে সম্পর্কিত একটি ভাষা যা স্ট্যাটিক টাইপ সাপোর্ট করে এবং প্রোগ্রামিং এর পরবর্তী ধাপগুলি সহজ করে। এটি বিশেষভাবে বড় ওয়েব অ্যাপ্লিকেশন লেখার জন্য উপযোগী হতে পারে। টাইপস্ক্রিপ্ট কোডকে কম্পাইল করে জাভাস্ক্রিপ্ট কোডে রূপান্তর করে যা যেকোনো ব্রাউজার বা সার্ভারে রান করতে পারে।
</h4>

```js

```

</details>

---

<details>
<summary>
  <h4> Primitive types in typescript

? (Click Me)</h4>

</summary>

<br >

<h4>
In TypeScript, primitive types are basic data types that represent single values. There are five primitive data types in TypeScript:

- number - represents numeric values, including integers and floating-point numbers
- string - represents text values, enclosed in quotes (single or double)
- boolean - represents a logical value, either true or false
- null - represents the intentional absence of any object value
- undefined - represents the absence of a value or uninitialized variable

In addition to these primitive types, there is also a special type called "symbol" that represents unique and immutable values. Symbols are typically used as keys in objects or to create private object properties.

Primitive types in TypeScript are used to declare variables and function parameters, and they are also returned by functions as a result. When a primitive type is assigned to a variable, TypeScript infers the type automatically. For example:

</h4>

---

<h4> 
বাংলা ঃ 
</h4>

```js
let age: number = 25;
let name: string = "John";
let isCompleted: boolean = false;
let noValue: null = null;
let notDefined: undefined = undefined;
let sym = Symbol("key");
```

</details>

---

<details>
<summary>
  <h4> What is: Array and Tuples in typescript
? (Click Me)</h4>

</summary>

<br >

<h4>
In TypeScript, an array is a special type of object that represents a collection of values of the same type. Arrays are declared using square brackets [] and can contain any valid TypeScript type, including other arrays.

For example, to declare an array of numbers, we can write:

</h4>

```js
let numbers: number[] = [1, 2, 3, 4, 5];
```

In addition to arrays, TypeScript also supports a special data type called tuples. A tuple is an array with a fixed number of elements, where each element can have a different data type.

For example, to declare a tuple with two elements - a string and a number,

```js
let myTuple: [string, number] = ["hello", 123];
```

<h4>
বাংলা ঃ  টাইপস্ক্রিপ্টে অ্যারে একটি স্পেশাল টাইপ যা একই টাইপের একটি ভ্যালুসমূহের সংগ্রহণকারী। অ্যারে ডিক্লেয়ার করা হয় বর্গ বন্ধনী [ ] দিয়ে এবং কোনো টাইপের ভ্যালু সংগ্রহ করতে পারে, যেমন নাম্বার, স্ট্রিং, বুলিয়ান এবং অন্যান্য টাইপ।

<br>

এছাড়াও, টাইপস্ক্রিপ্ট টিউপলস নামে একটি বিশেষ টাইপ সাপোর্ট করে। টিউপল একটি ফিক্সড সাইজ অ্যারে যা একাধিক টাইপের ভ্যালু ধারণ করতে পারে।

</h4>

```js
const names = ["rakib", "sadiya", "ariyan", 434, true];

const rollNumber: number[] = [212, 32323.23];

const user: [number, string] = [32, "rakib"];
user[1] = "ralkib";

const cuple: [string, string, true] = ["rakib", "sadiya", true];
```

</details>

---

<details>

<summary>
  <h4> What is TypeScrip
? (Click Me)</h4>
</summary>

<br >

<h4>

</h4>

<h4>
বাংলা ঃ Literal Types টাইপস্ক্রিপ্টের একটি ফিচার যা সম্পূর্ণ নির্দিষ্ট মানগুলি ব্যবহার করে একটি টাইপ নির্দিষ্ট করা যায়।  
যেমন, আমরা লিটারেল টাইপ ব্যবহার করে একটি ভ্যারিয়েবল নির্দিষ্ট করতে পারি:
</h4>

```js
const user: {
  readonly company: string;
  name: string;

  age: number;
  isMarid: boolean;
  wife?: string;
} = {
  company: "Programming Hero",
  name: "rakib",
  age: 43,
  isMarid: true,
  //   wife: "bibi",
};
// user.company = "PH BD";

```

</details>

---

<details>

<summary>
  <h4>  Functions in Typescript

? (Click Me)</h4>

</summary>

<br >

<h4> 
A function in TypeScript is a block of code that performs a specific task. It can accept one or more arguments and can return a value. You can define a function in TypeScript using the "function" keyword, followed by the function name, and the parameter list enclosed in parentheses. The function body contains the code that performs the task. Alternatively, you can use arrow function syntax, which is a more concise way of defining functions.
</h4>

<h4>
বাংলা ঃ 
টাইপস্ক্রিপ্টে ফাংশন হলো কোনো কাজ সম্পাদনের জন্য নির্দিষ্ট কোডের একটি ব্লক। এটি একটি পুনরাবৃত্তিমূলক কোড এবং একই কাজটি প্রোগ্রামের বিভিন্ন অংশ থেকে কল করা যেতে পারে। টাইপস্ক্রিপ্টে ফাংশন একটি বা একাধিক আর্গুমেন্ট গ্রহণ করতে পারে এবং একটি মান রিটার্ন করতে পারে।

টাইপস্ক্রিপ্টে ফাংশন ডিফাইন করতে "ফাংশন" কীওয়ার্ড ব্যবহার করে করা হয় যা ফাংশনের নাম এবং আর্গুমেন্ট লিস্টকে প্রথমতঃ কথিত করে। ফাংশনের বডি একটি ব্রেসিস এর ভিতরে থাকে এবং কাজ সম্পাদন করে। আরো সংক্ষেপে ফাংশন ডিফাইন করার জন্য আমরা এরো ফাংশন সিনট্যাক্স ব্যবহার করতে পারি।

</h4>

```js
// noImplicitAny": false

// normal function

function add(num1: number, num2: number) {
  return num1 + num2;
}
add(23, 434);

const addArrow = (num1: number, num2: number): number => num1 + num2;
```

</details>

<details>

<summary>
  <h4>  spread operator in Typescript

? (Click Me)</h4>

</summary>

<br >

<h4> 
The spread operator in TypeScript is denoted by three consecutive dots "..." and is used to expand an iterable object such as an array, string, or object into individual elements. It allows you to use an array or object in a place where individual elements are expected.

When used with arrays, the spread operator can be used to create a new array by combining the elements of one or more existing arrays. Here's an example:

</h4>

<h4>
বাংলা ঃ

টাইপস্ক্রিপ্টে স্প্রেড অপারেটর তিনটি দশক চিহ্নে "..." দ্বারা নির্দেশিত করা হয় এবং এটি একটি আইটারেবল অবজেক্ট যেমন অ্যারে, স্ট্রিং বা অবজেক্টকে একটি নির্দিষ্ট উপাদানে প্রসার করতে ব্যবহৃত হয়। এটি আপনাকে একটি অ্যারে বা অবজেক্টকে ব্যবহার করতে দেয় যে জায়গাতে একটি উপাদান প্রয়োজন।

অ্যারে দিয়ে ব্যবহৃত স্প্রেড অপারেটরটি একটি নতুন অ্যারে তৈরি করতে ব্যবহৃত হয়, যা একটি বা একাধিক বিদ্যমান অ্যারের উপাদানগুলি মিলিয়ে তৈরি করে। এখানে একটি

</h4>

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

</details>

<details>

<summary>
  <h4>  Typescript

? (Click Me)</h4>

</summary>

<br >

<h4>
রেস্ট অপারেটর টাইপস্ক্রিপ্টে একটি প্যারামিটার যা উপাদানগুলি একটি নির্দিষ্ট উপাদানের সাথে সংযোজন করে। এটি একটি ফাংশনের প্যারামিটার হিসাবে ব্যবহৃত হয় এবং উপাদানগুলি একটি অ্যারের মতো কাজ করে যা উপাদানের সংখ্যা বা তার স্থানের পরিমাণ দেখে না করে। <br>
 
 
রেস্ট অপারেটর টাইপস্ক্রিপ্টে একটি প্যারামিটার যা উপাদানগুলি একটি নির্দিষ্ট উপাদানের সাথে সংযোজন করে। এটি একটি ফাংশনের প্যারামিটার হিসাবে ব্যবহৃত হয় এবং উপাদানগুলি একটি অ্যারের মতো কাজ করে যা উপাদানের সংখ্যা বা তার স্থানের পরিমাণ দেখে না করে।

উদাহরণস্বরূপ, আপনি একটি ফাংশন লিখতে পারেন যা একটি অ্যারে এবং একটি নির্দিষ্ট উপাদানের সংখ্যা গ্রহণ করে:

 </h4>

<h4>
বাংলা ঃ

</h4>

```js
function foo(...args: number[]) {
  console.log(args);
}

foo(1, 2, 3); // আউটপুট: [1, 2, 3]
foo(4, 5, 6, 7, 8); // আউটপুট: [4, 5, 6, 7, 8]
```

এখানে, ...args ফাংশনের রেস্ট প্যারামিটার হিসাবে ব্যবহৃত হয় এবং এটি উপাদানগুলি একটি অ্যারের মতো কাজ করে। ফাংশনে আপনি যেকোনো সংখ্যক উপাদান পাস করতে পারেন এবং এই উপাদানগুলি args নামের অ্যারেতে সংরক্ষণ করা

</details>

<details>

<summary>
  <h4>  Typescript Type alias

? (Click Me)</h4>

</summary>

<br >

<h4>
Type alias একটি টাইপস্ক্রিপ্ট ফিচার যা আপনাকে কোডের বিভিন্ন জায়গায় প্রয়োজনীয় ডেটা টাইপগুলি পুনরাবৃত্তি করার জন্য একটি নাম প্রদান করে। একটি টাইপ এলিয়াস নির্দিষ্ট টাইপের উপর নির্ভর করে এবং কোডে লেখার সময় অধিক পদক্ষেপ ছাড়াই কোড পড়ানোর জন্য ব্যবহৃত হয়।

উদাহরণস্বরূপ, আপনি একটি প্রতিষ্ঠানের বিভিন্ন কর্মচারীর তথ্য সংরক্ষণ করতে পারেন এবং তাদের সম্পর্কে বিভিন্ন তথ্য যেমন নাম, বয়স, পদবী ইত্যাদি রাখতে পারেন। এই তথ্যগুলি একটি অবজেক্টের সাথে সংরক্ষণ করা যেতে পারে যা আপনি একটি টাইপ

</h4>

<h4>
বাংলা ঃ

</h4>

```js
type Employee = {
  name: string,
  age: number,
  position: string,
};

let employee: Employee = {
  name: "John Doe",
  age: 35,
  position: "Software Engineer",
};
```

```js
type CrusType = {
  name: string,
  age?: number,
  profession: string,
  address: string,
};

const crush1: CrusType = {
  name: "sadiya",
  age: 18,
  profession: "Teacher",
  address: "dhaka",
};

const crush2: CrusType = {
  name: "tiya pakhi",

  profession: "Teacher",
  address: "pabna",
};

type CurshMarried = boolean;

const isCurshMerried: CurshMarried = false;

type Course = string;

const courseName: Course = "Next level Course";

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType //   (x, y) => x + y); (10,32)=10+32
) => {
  return operation(number1, number2);
};

calculate(32, 323, (x, y) => x + y);

calculate(323, 332, (x, y) => x * y);
calculate(323, 32, (x, y) => x - y);
```

</details>

<details>

<summary>
  <h4>  Typescript  Union

? (Click Me)</h4>

</summary>

<br >

<h4>
In TypeScript, Union is a type that allows a variable or parameter to have more than one possible type. It is represented using the | operator between the types.

For example, if we want to define a variable that can either be a string or a number, we can define it as a union type like this:

</h4>

<h4>
বাংলা ঃ

</h4>

```js
let myVar: string | number;
```

</details>
<details>

<summary>
  <h4>  Typescript

? (Click Me)</h4>

</summary>

<br >

<h4>

</h4>

<h4>
বাংলা ঃ

</h4>

```js

```

</details>
