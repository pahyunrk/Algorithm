function solution(numbers) {
    var answer = 0;
    var maxNum = 0;
    var minNum = 0;
    
    numbers.sort(function(a,b){
        return a-b;
    })
    
    minNum = numbers[0] * numbers[1];
    maxNum = numbers[numbers.length-1] * numbers[numbers.length-2]
    
    answer = Math.max(minNum, maxNum);
    
    return answer;
}