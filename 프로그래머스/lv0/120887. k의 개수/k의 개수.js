function solution(i, j, k) {
    var answer = 0;
    var s='';
    
    for(var i; i<=j; i++){
        s += i;
    }
    
    s.split("");
    
    for(var i=0; i<s.length; i++){
        if(s[i] == k){
            answer ++;
        }
    }
    
    return answer;
}