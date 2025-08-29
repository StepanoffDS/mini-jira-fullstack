const get = (obj, path) => {
  const arrKeys = path.split('.');
  let currObj = obj;

  for (const key of arrKeys) {
    currObj = currObj[key];
    if (!currObj) {
      currObj = undefined;
      break;
    }
  }

  return currObj
};


const obj = {
  valu1e: {
    bar: 100
  }
};

console.log(get(obj, 'value.bar'));
