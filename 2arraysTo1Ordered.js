function sortArrays(arr1, arr2) {
  //let a1 = 0;
  // let a2 = 0;
  let mergedArray = arr1.concat(arr2);
  let length = mergedArray.length;
  let SortedArray = [];
  let index = 0;

  /*  first we will combine them. Second we will sort the combined array
  logic find lowest number push into new array and continue till old arr ends.*/

  for (let j = 0; j < length; j++) {
    let temp = 0;
    for (let i = 1; i < mergedArray.length; i++) {
      if (mergedArray[i] < mergedArray[index]) {
        index = i;
      }
    }
    SortedArray.push(mergedArray[index]);
    mergedArray.splice(index, 1);
    index = 0;
  }
  return SortedArray;
}

console.log(sortArrays([1, 5, 3, 7], [3, 6, 1, 8]));
