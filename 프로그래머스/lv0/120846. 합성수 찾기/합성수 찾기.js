function solution(n) {
    var answer = 0;
    var cnt; 
    
   for(var i = 1; i <= n; i++) {
        cnt = 0;
       
        for(j = 0; j <= i; j++) {
            if(i % j === 0) {
                cnt++
            }
        }
        
        if(cnt > 2) {
            answer++
        }
    }
    
    return answer;
}