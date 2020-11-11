function flatten(list) {
  let result = []

  list.forEach(item => Array.isArray(item) ? result.push(...flattenDeep(item)) : result.push(item))
  
  return result;
}

function flattenDeep(ar) {
   return ar.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

// should be return [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));