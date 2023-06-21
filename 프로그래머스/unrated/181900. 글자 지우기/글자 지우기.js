function solution(my_string, indices) {
    var answer = [];
    var arr = Array.from(my_string);
    var result = "";
    
    arr.map(function(v,i){
       if(!indices.includes(i)){
           answer.push(v);
       }
    })
    
    result = answer.join("");
    return result;
}