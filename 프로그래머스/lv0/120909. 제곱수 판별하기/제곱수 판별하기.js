function solution(n) {
    var answer = 0;
    var num;
    
    num = n ** 0.5;
    
    if(n%num == 0){
        answer = 1;
    }else {
        answer = 2;
    }
    
    return answer;
}