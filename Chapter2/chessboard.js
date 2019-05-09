'use strict';

let line = '';

for (let outerLoop = 1; outerLoop <=8; outerLoop++){
    for (let innerLoop = 1; innerLoop <=8; innerLoop++){
        if ((innerLoop+outerLoop)%2==0) {
            line+=' ';
        }
        else {
            line+='#';
        }
    }
    line+='\n';
}

console.log(line);

