function setup(){
canvas=createCanvas(400,600)
canvas.center()
video=createCapture(VIDEO)
video.hide()
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelloaded(){
console.log("model has been loaded");
}

function draw(){
image(video,0,0,600,400)
if(status1!=""){
objectDetector.detect(video,gotresults)
for(i=0; i<objects.length; i++){
document.getElementById("number_of_objects").innerHTML="number of objects detectd are"+objects.length
document.getElementById("status").innerHTML="status: objects detected"
fill("#6CBCCF")
percent=floor(objects[i].confidence*100)
text(objects[i].label+""+percent,objects[i].x,objects[i].y)
noFill()
stroke("#6CBCCF")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}

function gotresults(results){
console.log(results);
objects=results
}