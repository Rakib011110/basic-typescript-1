type CrusType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
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
