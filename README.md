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
