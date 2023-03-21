function solution(s) {
    var answer = '';
    var arr = [];
    var sarr = [];
    
    sarr = s.split("");
    
    for(var i=0; i<sarr.length; i++){
        if(sarr.indexOf(sarr[i]) == sarr.lastIndexOf(sarr[i])){
            arr.push(sarr[i]);
        }
    }
    answer = arr.sort().join("");
    return answer;
}