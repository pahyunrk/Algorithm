function solution(id_pw, db) {
    var answer = '';
    
    var id = db.filter(item => item[0] == id_pw[0]);
    var pw = id.filter(item => item[1] == id_pw[1]);
    
    if(pw.length > 0 && id.length > 0){
        answer = "login";
    }else if(id.length > 0){
        answer = "wrong pw";
    }else{
        answer = "fail";
    }
   
    return answer;
}