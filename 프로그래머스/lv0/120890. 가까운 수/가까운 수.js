function solution(array, n) {
    var answer = 0;
    var arr = []; 
    var num;
    
    array.sort();
    
    for(var i=0; i< array.length; i++){
        arr.push(Math.abs(array[i]-n));
    }
    
    num = arr.indexOf(Math.min.apply(null,arr));
    
    answer = array[num];
    
    return answer;
}