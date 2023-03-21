function solution(numbers) {
    var answer = 0;
    
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven",                   "eight", "nine"];
    
    for(var i=0; i< num.length; i++){
        numbers = numbers.split(num[i]).join(i)
    }
    answer = Number(numbers)
    
    return answer;
}