const age: number = 22;

if (age >= 18) {
  console.log("Yes");
} else {
  console.log("No");
}

const isAdult = age >= 18 ? "yes" : "no";

const isAuthenticationUser = null;
const userName = isAuthenticationUser ?? "guest";

console.log(userName);
