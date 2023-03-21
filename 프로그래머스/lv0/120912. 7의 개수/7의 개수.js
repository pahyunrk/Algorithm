function solution(array) {
    var answer = 0;
    var st = '';
    var seven;
    
    st = array.join("");
    
    seven = st.replace(/[^7]/g,"");
    
    return seven.length;
}