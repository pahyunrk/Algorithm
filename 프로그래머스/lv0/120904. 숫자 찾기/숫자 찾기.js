function solution(num, k) {
    var answer = 0;
    var arr;
    
    arr = String(num).split("");
    
    answer = arr.indexOf(String(k))
    
    if(answer != -1){
        answer += 1;
    }
    
    return answer;
}