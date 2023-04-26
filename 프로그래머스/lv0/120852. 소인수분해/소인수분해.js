function solution(n) {
   var answer = [];
    for(let i =2 ; i<=n ; i++) {
        while( n % i === 0) {
            answer.push(i);
            n = n / i;
        }
    }

    answer = answer.filter((item,idx)=>{
        return answer.indexOf(item) === idx;
    })
    return answer;
}