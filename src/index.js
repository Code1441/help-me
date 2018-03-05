module.exports =  function count(s, pairs) {
    var N = 1;
    var objectN = {};
    var result = [];
    var resultArray;
    var bool = true;

    function numberPrimers(objectN, index) {
        var result = 1;
        for (var prop in objectN) {
            var answer = (Math.pow(prop, objectN[prop]) - Math.pow(prop, objectN[prop] - 1));
            result *= answer - index;
        }
        return result;
    }


    for (var i = 0; i < pairs.length; i++) {
        objectN[pairs[i][0]] = pairs[i][1];
    }

    i = 0;

    var length = s.length;

    if (s.indexOf('1')!==-1 ) {
        result.push(numberPrimers(objectN, s.lastIndexOf('1')));
    }

    // решение для s = ['0'] надо сделать с помощью формулы включений и исключений;
    // пока так
    if(s.indexOf('0')!==-1 ){
        for(var i = 0; i < pairs.length; i++){
            N *= (pairs[i][0] ** pairs[i][1]);
        }
        result.push(N - numberPrimers(objectN, s.lastIndexOf('0')));
    }

    return Math.min.apply(null,result) % 1000000007;
}