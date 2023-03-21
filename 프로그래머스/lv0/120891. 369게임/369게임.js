function solution(order) {
    var answer = 0;
    order = String(order);
    
    answer= order.match(/[3|6|9]/g);
    
    if(answer == null){
        return 0;
    }else{
        return answer.length;
    }
    
    return answer;
}