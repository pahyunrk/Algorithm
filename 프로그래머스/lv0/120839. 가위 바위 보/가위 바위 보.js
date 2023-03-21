function solution(rsp) {
    var answer = '';
    
    var arr = rsp.split("");
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "2"){
            answer += "0"
        }
        if(arr[i] == "0"){
            answer += "5"
        }
        if(arr[i] == "5"){
            answer += "2"
        }
    }
    return answer;
}