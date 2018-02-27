module.exports = function count(s, pairs) {
    var N = 1, result1 = [], result2 = [], mainResult = [];

 
    function simple(num) {
        var array = [];
        var count = 2;
        while (num > 1) {
            if (num % count == 0) {
                array.push(count);
                num /= count;
            }
            else count++;
        }
        return array;
    }
     function nod(a,b){
        if (b == 0)
            return Math.abs(a);
        return nod(b, a % b);
    }


    for(var i = 0; i < pairs.length; i++){
        N *= (pairs[i][0] ** pairs[i][1]);
    }

    for(var j = 0; j < s.length; j++){
        if(s[j]==1){
            for(var k = 0; k < N; k++){
                if (nod(k+j,N)===1) result1.push(k+1);
            }
        }
        else if(s[j]==0){
            for(var k = 0; k < N; k++){
                if (nod(k+j,N)!==1) result2.push(k+1);
            }
        }
    }

    if(result1.length === 0) return result2.length% 1000000007;
    else if (result2.length === 0) return result1.length % 1000000007;

    for (var i = 0; i < result1.length; i++){
        if(result2.indexOf(result1[i])!==-1 && mainResult.indexOf(result1[i])===-1) mainResult.push(result1[i]);
    }
    for (var i = 0; i < result2.length; i++){
        if(result1.indexOf(result2[i])!==-1 && mainResult.indexOf(result2[i])===-1) mainResult.push(result2[i]);
    }

    return mainResult.length % 1000000007;
}
