function mostFrequentDigitSum(n) {
    let result = n;
    const digitsSumArr = [];
    
    while (result !== 0) {
      let digitsSum = 0;
      const strN = String(result);
      
      for (let i = 0; i < strN.length; i++) {
        digitsSum += parseInt(strN[i]);
      }
      
      result -= digitsSum;
      digitsSumArr.push(digitsSum);
    }
  
    const count = {};
  
    for (let i = 0; i < digitsSumArr.length; i++) {
      const num = digitsSumArr[i];
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }

    let maxCount = 0;
    let maxNumber = 0;
  
    for (let key in count) {
      const number = parseInt(key);
      const freq = count[key];
  
      if (freq > maxCount || (freq === maxCount && number > maxNumber)) {
        maxCount = freq;
        maxNumber = number;
      }
    }
  
    return maxNumber;
  }
  