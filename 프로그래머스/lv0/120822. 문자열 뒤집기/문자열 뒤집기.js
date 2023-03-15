function solution(my_string) {
    var answer = '';
    
    answer = my_string.split("");
    
    answer.reverse();
    
    var result="";
    
    for(var i=0; i<answer.length; i++){
        result += answer[i];
        
    }
    return result;
}