function solution(spell, dic) {
    var answer = 0;
    
    for(var i=0; i<dic.length; i++){
        var chk = 0;
        for(var j=0; j<spell.length; j++){
            if(dic[i].indexOf(spell[j]) == -1){
                answer = 2;
                chk = -1;
                break;
            }
        }
        if(chk == 0){
            answer = 1;
            break;
        }
    }

   
    
    return answer;
}