var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("text"); 

function start()
{
    document.getElementById("text").innerHTML = ""
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 var content = event.results[0][0].transcript;
 console.log(content);
 document.getElementById("text").innerHTML = content; 
}