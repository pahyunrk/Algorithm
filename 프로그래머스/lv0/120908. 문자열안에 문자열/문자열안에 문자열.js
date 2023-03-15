function solution(str1, str2) {
    var answer = 0;
    var idx;
    
    idx = str1.indexOf(str2);
    
    if(idx != -1){
        answer = 1;
    }else {
        answer = 2;
    }
    
    
    return answer;
}