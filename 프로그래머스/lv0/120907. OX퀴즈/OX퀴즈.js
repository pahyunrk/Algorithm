function solution(quiz) {
    var answer = [];
    
    quiz.forEach(element =>{
        var arr = element.split('='); // ['3-4', '-3']
        if(eval(arr[0]) == eval(arr[1])){
             answer.push("O");
        }else {
             answer.push("X");
        }
    });  
    return answer;
}