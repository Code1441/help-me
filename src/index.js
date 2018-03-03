module.exports = function count(s, pairs) {
    var N = 1;
    var objectN = {};
    var result = 1;
    var bool = true;
    
    function numberPrimers(objectN) {
        for (var prop in objectN) {
            var answer = (Math.pow(prop, objectN[prop]) - Math.pow(prop, objectN[prop] - 1));
            result *= answer - length + 1;
        }
        return result;
    }
    
    
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
        result = numberPrimers(objectN);
    }

    // решение для s = ['0'] надо сделать с помощью формулы включений и исключений;
    // пока так
    if(bool == false && length === 1){
        for(var i = 0; i < pairs.length; i++){
            N *= (pairs[i][0] ** pairs[i][1]);
        }
        result = N - numberPrimers(objectN);
        
    }

    return result % 1000000007;
}
