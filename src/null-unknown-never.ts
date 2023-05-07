const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching");
  }
};

searchName(null);
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertSpeed}`);
  }
  if (typeof speed == "string") {
    const [value, unit] = speed.split(" ");
    const convertSpeed = (parseFloat(value) * 1000) / 3600;

    console.log(`My speed is ${convertSpeed}`);
  } else {
    console.log("wrong type");
  }
};
getMyCarSpeed(10);
getMyCarSpeed("10 km^-1");
getMyCarSpeed(true);
