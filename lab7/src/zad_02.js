const _ = require('lodash');

const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
  };

  const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
  };

  const object3 = {
    value: { field: "old value" },
    name: 'test'
  };

  const object4 = {
    value: { field: "new value" },
    name: 'test'
  };

  function detectChanges(original, modified) {
    function detectChangesHelper(original, modified) {
        return _.reduce(original, function(acc, value, key){
            if (typeof value === "object") {
                return detectChangesHelper(value, modified[key]) ? true : acc;
            } else {
                return value !== modified[key] ? true : acc;
            }
             }, false);
      }
    return _.reduce(original, function(acc, value, key){
         if (typeof value === "object") {
            return detectChangesHelper(value, modified[key]) ? [...acc, [ key, modified[key] ]] : acc;
         } else {
            return value !== modified[key] ? [...acc, [ key, modified[key] ]] : acc;
         }
    }, []);
  }

  console.log(detectChanges(object1, object2));

  console.log(detectChanges(object3, object4));

// i teraz znalazłem differenceWith i Object.entries

function differentDetectChanges(original, modified) {
    return _.differenceWith( Object.entries(modified), Object.entries(original), (mod, og) => _.isEqual(mod, og));
}
console.log(differentDetectChanges(object1, object2));
console.log(differentDetectChanges(object3, object4));