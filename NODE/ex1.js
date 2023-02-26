const fs = require('fs');
fs.writeFile("text.txt","utf8",function(err,data){
    if(err) throw err;
    console.log(data);

});
//---- READ A FILE----





















