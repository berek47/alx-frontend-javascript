export default function appendToEachArrayValue(array, appendString) {
  const myarray  = [];
  for (const item in array){
     myarray.push(appendString + item);
  }

  return myarray;
}