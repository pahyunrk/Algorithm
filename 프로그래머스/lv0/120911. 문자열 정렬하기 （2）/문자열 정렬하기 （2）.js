function solution(my_string) {
    var answer = '';
    var arr 
    
    arr = my_string.toLowerCase().split("");
    arr.sort();
    
    answer = arr.join("");
    
    return answer;
}