const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Implement a function biggestFollower()
// which returns the name of the individual who follows the most people.

const biggestFollower = object => {
  let data = Object.values(object);
  let result = { name: "", follows: [] };

  data.forEach(element => {
    if (element.follows.length >= result.follows.length) {
      result.follows = element.follows;
      result.name = element.name;
    }
  });
  return result.name;
};

// Implement mostPopular() which returns the name of the most popular (most followed) individual.
