module.exports = function count(s, pairs) {

     var objectN = {};
     var result = 1;
     var bool = true;

     for (var i = 0; i < pairs.length; i++) {
         objectN[pairs[i][0]] = pairs[i][1];
     }

     i = 0;

     while (s[i]) {
         if (s[i] !== '1') bool = false;
         i++;
     }

     var length = s.length;
     if (bool === true) {
         for (var prop in objectN) {
             var answer = (Math.pow(prop, objectN[prop]) - Math.pow(prop, objectN[prop] - 1));
             result *= answer - length + 1;
         }
     }

     return result % 1000000007;
 }