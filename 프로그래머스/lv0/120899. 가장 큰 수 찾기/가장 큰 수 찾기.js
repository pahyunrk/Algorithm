function solution(array) {
    var answer = [];
    var max;
    var idx;
    
    max = Math.max.apply(null,array);
    idx = array.indexOf(max);
    
    answer.push(max,idx);
    
    return answer;
}