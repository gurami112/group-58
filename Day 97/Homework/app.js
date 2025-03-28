//  Custom Sort with Callback
function sortByAge(arr, callback) {
    return arr.sort(callback);
  }
  
  //  Custom Map Function
  function applyToEach(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  //  Custom Filter for Adults
  function filterAdults(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  //  Custom Reduce: Sum of Ages
  function sumAges(arr, callback, start) {
    let total = start;
    for (let i = 0; i < arr.length; i++) {
      total = callback(total, arr[i]);
    }
    return total;
  }
  
  // Find the Oldest Person
  function findOldest(arr, callback) {
    let oldest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      oldest = callback(oldest, arr[i]);
    }
    return oldest;
  }
  
  //  Custom forEach: Log Names
  function logNames(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  
  //  Transform Data into Strings
  function formatPeople(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  //  Find the Youngest Person
  function findYoungest(arr, callback) {
    let youngest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      youngest = callback(youngest, arr[i]);
    }
    return youngest;
  }
  
  //  Check If All Are Adults
  function areAllAdults(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        return false;
      }
    }
    return true;
  }
  
  //  Find the First Minor
  function findMinor(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return null;
  }
  
  //  Recreate map
  function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  //  Recreate filter
  function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  //Recreate reduce
  function myReduce(arr, callback, start) {
    let result = start;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i]);
    }
    return result;
  }
  
  // Recreate forEach
  function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  
  //Recreate find
  function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  