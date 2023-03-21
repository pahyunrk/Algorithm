function solution(emergency) {
    var answer = [];
    
    var arr = emergency.slice(0);
    
    arr.sort(function(a,b){
        return b-a;
    })
    
    for(var i=0; i< emergency.length; i++){
       answer.push(arr.indexOf(emergency[i])+1);
    }
    
    return answer;
}