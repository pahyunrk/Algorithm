function solution(myString) {
    var answer = '';
    
    myString.toUpperCase();
    
    var myStringArr = myString.split("");
    
    myStringArr.map((v)=>{
        v = v < "l" ? "l" : v
        answer += v
    })

    return answer;
}