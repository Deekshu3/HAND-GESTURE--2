Predicition1="";
Predicition2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(capture_img){
        document.getElementById("photo").innerHTML='<img id="display_img" src="' +capture_img+'">';
    });
}
console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function speak(){
    synth=window.speechSynthesis;
    predict1="The first prediction is "+Predicition1;
    predict2="And the second prediction is "+Predicition1;
    voice=new SpeechSynthesisUtterance(predict1+predict2);
    synth.speak(voice);
}