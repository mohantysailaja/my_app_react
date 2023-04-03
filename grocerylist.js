

//var gocerylist = ["milk","flowers","audi","bread","suji","ball","books"];

/*
consol e.log(gocerylist[0]);
console.log(gocerylist[1]);
console.log(gocerylist[2]);

var lengtharray = gocerylist.length;
console.log(lengtharray);
console.log(gocerylist[lengtharray - 1]);
*/
/*for (i =0; i < gocerylist.length; i ++){
    console.log(gocerylist[i]);
}
*/
/*key value pair*/
var language ={
    verb:"sing",
    adverb:"slowly",
    adjective:"beautuful",
    words:"difficult",
    sentences:"paragraph",
    strength:1000
}
var math ={
    verb:"sing_math",
    adverb:"slowly_math",
    adjective:"beautuful_math",
    words:"difficult_math",
    sentences:"paragraph_math",
    strength:100
}
//console.log(math.verb);
//console.log(language.strength > math.strength);//result is true 
var subjects =[language,math];
for(var i =0; i<subjects.length;i++){//for loop
    var currentsub = subjects[i];//array index based access
    console.log(currentsub.words);
    console.log(currentsub.sentences);
    console.log("-----------------------");
}
