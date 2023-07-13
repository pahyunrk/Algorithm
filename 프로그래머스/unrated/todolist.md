할 일 목록
![todolist](https://github.com/pahyunrk/Algorithm/assets/52398783/e5c85d90-945b-4e17-9691-b0840d42b8d8)




```javascript
function solution(todo_list, finished) {
    var answer = [];
    
    todo_list.map((v,i)=>{
        if(!finished[i]){
            answer.push(v);
        }
        
    })
    
    return answer;
}

```
