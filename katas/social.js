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
// This only returns one person. Doesnt for multiple people with equal most follows

const mostPopular = object => {
  let dataEntries = Object.entries(object);
  let accountsFollowed = [];

  dataEntries.forEach(element => {
    element.totalFollowers = 0;
    for (let i = 0; i < element[1].follows.length; i++) {
      accountsFollowed.push(element[1].follows[i]);
    }
  });

  for (profile of dataEntries) {
    for (follower of accountsFollowed) {
      if (follower === profile[0]) {
        profile.totalFollowers += 1;
      }
    }
  }

  dataEntries.reverse();

  return dataEntries[0][1].name;
};

console.log(mostPopular(data));
// followedAccounts = [].concat.apply([], followed);
// f01 = 2
// f02 = 2
// f03 = 2
// f04 = 3
// f05 = 3
// f06 = 3
