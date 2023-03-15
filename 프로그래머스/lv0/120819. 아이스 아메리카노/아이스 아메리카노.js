function solution(money) {
    var answer = [];
    
    var ameri = money / 5500 
    var chg = money - (5500 * Math.floor(ameri))
    
    answer.push(Math.floor(ameri));
    answer.push(chg);
    
    return answer;
}