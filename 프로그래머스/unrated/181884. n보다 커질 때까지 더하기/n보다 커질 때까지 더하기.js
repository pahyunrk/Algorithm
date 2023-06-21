function solution(numbers, n) {
    var answer = 0;
    
    numbers.map(function(v){
        if(answer <= n){
             answer += v   
        }
    })
    return answer;
}