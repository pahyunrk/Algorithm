function solution(before, after) {
    var answer = 0;
    var barr = [];
    var aarr = [];
    
    barr = before.split("").sort();
    aarr = after.split("").sort();
    
    if(String(barr) == String(aarr)){
        answer = 1;
    }else{
        answer = 0;
    }
    
    return answer;
}