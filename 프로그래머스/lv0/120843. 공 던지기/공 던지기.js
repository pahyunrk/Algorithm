function solution(numbers, k) {
    var answer = 0;
    
    var idx = 0;
    
    while(k > 1){
        idx += 2
        idx %= numbers.length;
        k -= 1
    }
    answer = numbers[idx];
    return answer;
}