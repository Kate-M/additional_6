module.exports = function zeros(expression) {
  var product = parseExpression(expression);

  return zerosAmount(product);

  function parseExpression(expression) {
    var newExpression = expression.split('*');
    var allFactorial = 1;

    for (var i = 0; i < newExpression.length; i++) {
      if (newExpression[i].indexOf('!!') >= 0) {

        var subNum = parseInt(newExpression[i]);

        if (subNum % 2 == 0) {
          for (var j = 2; j <= subNum; j += 2) {
            allFactorial = multiply(j, allFactorial)
          }
        }
        if (subNum % 2 > 0) {
          for (var j = 1; j <= subNum; j += 2) {
            allFactorial = multiply(j, allFactorial)
          }
        }

      }
      else {
        var subNum = parseInt(newExpression[i]);

        for (var j = 1; j <= subNum; j++) {
          allFactorial = multiply(j, allFactorial)
        }
      }
    }
    return allFactorial;
  }

  function zerosAmount(input) {
    var result = 0;
    input = input.split('');
    while (input.pop() == '0') {
      result++;
    }
    return result;

  }
  function multiply(first, second) {
    first = first.toString();
    second = second.toString();
    a = first.split('');
    b = second.split('');
    var tempArr = [];

    for (var i = a.length - 1; i >= 0; i--) {
      for (var j = b.length - 1; j >= 0; j--) {
        if (tempArr[j] == null) {

          tempArr[j] = 0;

        }
        var summ = a[i] * b[j];
        tempArr[j] += summ;
      }

      tempArr.unshift(0);
    }
    tempArr.shift();

    for (var i = tempArr.length - 1; i > 0; i--) {
      var k = i - 1;
      if (tempArr[i] >= 10) {

        if (tempArr[k] == null) {
          tempArr[k] = 0;
        }
        var check = parseInt(tempArr[i] / 10);
        tempArr[k] += check;

        tempArr[i] %= 10;
      }
    }
    result = tempArr.join('');

    return result;
  }

}
