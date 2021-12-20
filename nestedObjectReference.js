/* 
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
*/

// return the nested property value if it exists,
// otherwise return undefined

Object.prototype.hash = function (string) {
  const pathArray = string.split(".");
  let result = this[pathArray[0]];
  for (let i = 1; i < pathArray.length; i++) {
    result = result[pathArray[i]];
    if (result == undefined) return result;
  }
  return result;
};

var obj = {
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

obj.hash("person.name"); // 'joe'
obj.hash("person.history.bio"); // { funFact: 'I like fishing.' }
obj.hash("person.history.homeStreet"); // undefined
obj.hash("person.animal.pet.needNoseAntEater"); // undefined
