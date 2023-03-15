function solution(n, k) {
    var answer = 0;
    var service = n/10;
    var serviceCnt = 0;
    
    if(service >= 1){
        serviceCnt = Math.floor(service);
    }
    answer = ((12000*n) + (2000*k))- serviceCnt*2000;
    return answer;
}