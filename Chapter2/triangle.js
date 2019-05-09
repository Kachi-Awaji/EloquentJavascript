'use strict';

/*
Write a loop that makes seven calls to console.log to output the following triangle:
# 
## 
### 
#### 
##### 
###### 
#######
*/

for (let output = '#'; output.length <= 7; output+='#') {
    console.log(output);
}