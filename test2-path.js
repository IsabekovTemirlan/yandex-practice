function get(obj, path, defaultValue = undefined) {
  const args = path.split('.')
  let isNot = false
  
  for (let i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      isNot = true;
      break;
    }
    obj = obj[args[i]];
  }
  
  return isNot ? defaultValue : obj
  
}

const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'
get(obj, 'a.x.e'); // undefined
get(obj, 'a.x.e', true); // true
get(obj, 'a.x.e', 'My default value'); // My default value