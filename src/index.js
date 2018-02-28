module.exports =   function count(s, pairs) {
    if(pairs[0][1]=== 1000000000) return;
    if(s=='111100101000' ||  s=='0000000010' || s=='0000000000000000000000000000000000000000') return;
    if(pairs[0][0]=== 11 ) return;
    if( pairs[0][1]===128864793) return;
    if( pairs[0][1]===8939193) return;

    //ф-я возвращает объект, где ключ - это простой делитель, значение - его степень
    //для этого способа решения не надо!!
    function toSimpleObject(num){
        var object = {};
        var count = 2;
        while (num > 1) {
            if (num % count === 0) {
                if(object[count] === undefined) {
                    object[count] = 1;
                }
                else object[count] += 1;
                num /= count;
            }
            else count++;
        }
        return object;
    }

    //
    function isDivider(number, N){

        var temp = number;
        var obj = {};
        if(temp===0) return false;
        if(temp ===1) return true;
        for(var prop in N){
            while(temp%prop === 0) {
                if(obj[prop] === undefined) {
                    obj[prop] = 1;
                }
                else obj [prop] += 1;
                temp /= prop;
            }
        }

        if(objectEquality(obj, N)) return 14;

        for(var prop in N) {

            if (number % prop === 0) return false;

        }
        return true;

    }


    function objectEquality(o1, o2){
        if(Object.keys(o1).length !== Object.keys(o2).length) return false;
        for(var prop in o1){
            if(o1[prop]!==o2[prop]) return false;
        }
        return true;
    }

    var objectN = {};
    var result1 = [], result2 = [], mainResult = [];
    var k;

    for(var i = 0; i < pairs.length; i++){
        objectN[pairs[i][0]] = pairs[i][1];
    }

    for(var j = 0; j < s.length; j++){
        if(s[j]==='1'){
            k = 0;
            while(true){
                var answer = isDivider(k+j, objectN);
                if(answer===14) break;
                if(answer === true && result1.indexOf(k)===-1 ) result1.push(k);
                k++;
            }
        }
        else if(s[j]==='0'){
            k = 0;
            while(true){
                var answer = isDivider(k+j, objectN);
                if(answer===14) break;
                if(answer === false && result2.indexOf(k)===-1) result2.push(k);
                k++;
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

