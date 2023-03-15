function solution(array) {
    var answer = 0;
    var len = array.length;
    array.sort(function(a,b){
        return a-b;
    })
    var center = Math.floor(len / 2);
    
    answer = array[center];
    return answer;
}