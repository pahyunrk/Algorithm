function solution(bin1, bin2) {
    var answer;
    var num1 = parseInt(bin1,2);
    var num2 = parseInt(bin2,2);
    
    answer = (num1 + num2);
    answer = answer.toString(2);
    return answer;
}