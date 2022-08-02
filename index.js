function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(hello){
   console.log(hello.toUpperCase()); 
}
logShout();

function logWhisper(hello){
    console.log(hello.toLowerCase());
}
logWhisper();

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
     return "I can't hear you!";
}

if (string === string.toUpperCase()){
    return "YES INDEED!";
}
if(string === "Let's have dinner together!"){
    return "I would love to!";
}
    
}

