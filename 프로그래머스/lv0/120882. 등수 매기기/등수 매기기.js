function solution(score) {
    var answer = [];
    var answer2 = new Array(score.length).fill(1);
    
    for(var i=0; i<score.length; i++){
        answer.push((parseInt(score[i][0])+parseInt(score[i][1]))/2);
    }
    
   for(var i = 0; i < answer.length; i++){
        for(var j = 0; j <answer.length; j++){
            if(answer[i]<answer[j]) answer2[i]++;
        }
    }
    return answer2;
}