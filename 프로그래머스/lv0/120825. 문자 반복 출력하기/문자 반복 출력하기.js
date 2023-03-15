function solution(my_string, n) {
    var answer = '';
    var arr = [];
    var result="";
    
    answer = my_string.split("");
    
    for(var i=0; i<answer.length; i++){
        for(var j=0; j<n; j++ ){
            arr.push(answer[i]);   
        }
        
    }
    
    for(var i=0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}