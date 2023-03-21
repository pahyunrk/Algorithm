function solution(sides) {
    var answer = 0;
    var max = 0;
    var min = 0;
    
    max = Math.max.apply(null, sides);
    min = Math.min.apply(null, sides);
    
    // 배열값 중 가장 긴변이 있을 시
    for(let i = max-min+1; i <= max; i ++) {
        answer++
    }
    // 배열값 중 가장 긴변이 없을 시
    for(let i = max+1; i < max+min; i ++) {
        answer++
    }
    
    return answer;
}