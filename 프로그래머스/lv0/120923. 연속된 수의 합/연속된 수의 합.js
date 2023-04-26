function solution(num, total) {
    var answer = [];
    var mid = (total/num) - (num-1)/2;
    
    for(var i=0; i < num; i++){
        answer[i]= mid;
        mid++;
    }
    return answer;
}