const isEmpty = (obj: object): boolean => {
  if (!isObject(obj)) {
    throw new Error('Argument should be an object');
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const isObject = (val: any): boolean => {
  return !Array.isArray(val) && typeof val === 'object' && val !== null;
};

export { isEmpty, isObject };
