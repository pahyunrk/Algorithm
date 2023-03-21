function solution(my_string) {
    var answer = [];
    
    var num = my_string.replace(/[^0-9]/g,"");
    answer = num.split("").map(Number);
    
    answer.sort();
    return answer;
}