function solution(s) {
    var answer = 0;
    
    var arr = s.split(" ");
    
        for(var i=0; i< arr.length; i++){
        if(arr[i] == 'Z'){
            arr.splice(i,1)
            arr.splice(i-1,1)
            i--;
        }
    }
    arr = arr.map(Number);

    var sum = 0;
    if(arr.length > 0){
         sum = arr.reduce((a,b) => (a+b));
    }else{
        sum = 0;
    }
   
    return sum;
}