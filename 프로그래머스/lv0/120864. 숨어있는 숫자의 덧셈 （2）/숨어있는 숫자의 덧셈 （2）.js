function solution(my_string) {
    var answer = 0;
    var num;
    
    num = my_string.match(/[0-9]+/g);
    
    if(num == undefined){
        answer = 0;
    }else{
        for(var i=0; i<num.length; i++){
            answer += Number(num[i]);
        }
    }
    
    
    return answer;
}
