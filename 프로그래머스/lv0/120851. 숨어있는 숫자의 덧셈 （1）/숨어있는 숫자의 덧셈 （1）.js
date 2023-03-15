function solution(my_string) {
    var answer = 0;
    var num;
    
    num = my_string.replace(/[^0-9]/g,"");
    
    num.split("");
    for(var i=0; i<num.length; i++){
        answer += parseInt(num[i]);
    }
    return answer;
}