const removeDuplicatesFromArray = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

export default removeDuplicatesFromArray;
