module.exports = function zeros(expression) {

  var newExpression = expression.split('*');
  var product = 1;
  var allFactorial = 1;
  for (var i = 0; i < newExpression.length; i++) {
    if (newExpression[i].indexOf('!!') >= 0) {

      var subNum = parseInt(newExpression[i]);
      
     if (subNum % 2 == 0) {
       for (var j = 2; j <= subNum; j += 2) {
        allFactorial *= j;
      }
     }
     if (subNum % 2 > 0) {
       for (var j = 1; j <= subNum; j += 2) {
        allFactorial *= j;
      }
     }

    }
    else {
      var subNum = parseInt(newExpression[i]);
      
      for (var j = 1; j <= subNum; j++) {
        allFactorial *= j;
      }

    }

    product *= allFactorial;
    
  }
  
  function zerosAmount(result) {
    
    var check = result % 10;
    if (check == 0) {
      var zeros = 0;
      
      do {
        zeros++;
        result = result / 10;
      } while (result % 10 == 0);
      return zeros;
    }
    else {
      return 0;
    }
  }
  console.log(product);
  return zerosAmount(allFactorial);
}
