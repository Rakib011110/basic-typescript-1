// noImplicitAny": false

// normal function
//  defoult parameter

function add(num1: number, num2: number = 10) {
  return num1 + num2;
}
add(434, 50);

//  arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const persion: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "rakib",
  balance: 5,
  addBalance(money: number) {
    // console.log();
    ` my new Balance is ${this.balance + money} `;
  },
};

const myFriend = ["rakkib", "shohan", "ariyan"];
const newFriend = ["sadiya", "sinthiya"];

const besFriend = {
  fullName: "sadiya",
  age: 18,
};
const { fullName: fullName } = besFriend;

console.log(fullName);
myFriend.push(...newFriend);
console.log(myFriend);

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`hi ${friend}`));
greetFriends("rakib", "sadiya", "ariyan");
