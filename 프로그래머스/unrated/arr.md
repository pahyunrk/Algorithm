배열만들기

![배열만들기](https://github.com/pahyunrk/Algorithm/assets/52398783/0c0d6c56-4e8b-436b-869b-c6a06dda38ca)

```javascript
function solution(intStrs, k, s, l) {
    var answer = [];
    var test = "";
    
    intStrs.map((v) =>{
       test = parseInt(v.substr(s,l));
       if(test > k){
           answer.push(test);
       }
    })
    
    return answer;
}

```
