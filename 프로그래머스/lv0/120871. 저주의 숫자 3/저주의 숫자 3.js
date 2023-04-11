function solution(n) {
    var answer = 0;

    for(var i=0 ; i<n ; i++) {
        answer++;
        while(answer.toString().includes('3') || answer%3 == 0) {
            answer++;
        }
    }
    return answer;
}