function solution(age) {
    var answer = '';
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var ageArr = String(age).split("");
    
    for(var i=0; i<ageArr.length; i++){
        answer += alpha[ageArr[i]];
    }
    
    
    return answer;
}