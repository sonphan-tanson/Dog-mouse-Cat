var fs = require('fs');
function x(){
    return new Promise(function(resolve,reject){
        fs.readFile('./abc1.ts',{encoding:'utf8'},function(err,data){
            console.log(data);
            resolve();
        });
        
    })
};
x().then(function(){
    console.log('a');
})