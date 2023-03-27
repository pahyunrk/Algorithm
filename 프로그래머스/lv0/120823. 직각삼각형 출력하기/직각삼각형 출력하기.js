const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    var str = ''
    for(var i = 0 ; i < input[0]; i++) {
        for(var j = 0 ; j <= i; j++) {
            str+='*'
        }
        str+='\n'
    }
    console.log(str)
});