function solution(num_str) {
    var answer = 0;
    
    var arr = num_str.split("");
    
    arr.map((v)=>{
        answer += Number(v);
        
    })
    
    return answer;
}