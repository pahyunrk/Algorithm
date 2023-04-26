function solution(numlist, n) {
    var answer = [];
    answer = numlist.sort((a,b) =>{
        var [aa,bb] = [Math.abs(a-n), Math.abs(b-n)]
        if(aa==bb){
            return b-a
         }
        return aa-bb
    })
    return answer;
}