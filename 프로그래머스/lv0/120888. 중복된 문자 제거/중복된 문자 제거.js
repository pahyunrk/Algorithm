function solution(my_string) {
    var answer = '';
    var arr = my_string.split("");
    
    answer = Array.from(new Set(arr)).join("");
    
    return answer;
}