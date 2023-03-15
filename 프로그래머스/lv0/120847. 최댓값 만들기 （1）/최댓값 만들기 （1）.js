function solution(numbers) {
    numbers.sort(function(a,b){
        return a-b;
    });
    
    var answer = 0;
    var len = numbers.length;
    
    answer = numbers[len-1] * numbers[len-2]
    return answer;
}