function checkValidArr(array) {
    
    return (array !== undefined) && (array.length > 0);
}

exports.min = function min (array) {
    if (!checkValidArr(array)) {
        return 0;
      }
      let min = array[0];
      for (let i = 1; i < array.length; i += 1) {
        if (min > array[i]) {
            min = array[i];
          }
      }
      return min;
    }

exports.max = function max (array) {
    if (!checkValidArr(array)) {
        return 0;
      }
      let max = array[0];
      for (let i = 1; i < array.length; i += 1) {
        if (max < array[i]) {
            max = array[i];
          }
      }
      return max;
    }

exports.avg = function avg (array) {
    if (!checkValidArr(array)) {
        return 0;
      }
      let sum = 0;
      for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
      }
      return sum / array.length;
    }
