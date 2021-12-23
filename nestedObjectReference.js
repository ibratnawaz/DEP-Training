/* 
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
*/

// return the nested property value if it exists,
// otherwise return undefined

Object.prototype.hash = function (value) {
  const pathArray = value.split(".");
  let result = this[pathArray[0]];
  for (let index = 1; index < pathArray.length; index++) {
    result = result[pathArray[index]];
    if (result == undefined) return result;
  }
  return result;
};

var data = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

data.hash("person.name"); // 'joe'
data.hash("person.history.bio"); // { funFact: 'I like fishing.' }
data.hash("person.history.homeStreet"); // undefined
data.hash("person.animal.pet.needNoseAntEater"); // undefined
