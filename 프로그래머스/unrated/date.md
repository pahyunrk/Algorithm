![date](https://github.com/pahyunrk/Algorithm/assets/52398783/994b105c-f742-4ad3-a944-a18a162c0fd7)

```javascript
function solution(date1, date2) {
    var answer = 0;

    var test1 = new Date(date1);
    var test2 = new Date(date2);
    
    if(test1 >= test2){
        answer = 0;
        

    }else{
        answer = 1;
    }
    return answer;
}
```
