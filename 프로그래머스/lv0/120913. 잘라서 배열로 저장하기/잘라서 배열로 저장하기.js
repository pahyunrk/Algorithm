function solution(my_str, n) {
    var answer = [];
    var arr = my_str.split("");
    

    for(var i=0; i<my_str.length/n; i++){
        answer.push(arr.splice(0,n).join(""));
    }
    
    return answer;
}