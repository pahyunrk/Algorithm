function solution(num_list) {
    var answer = -1;
    num_list.map(function(v,i){
        if(answer == -1){
            if(v < 0){
                answer = i;
            }
        }
    })
    return answer;
}