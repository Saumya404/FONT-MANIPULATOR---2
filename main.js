function setup(){
    video=createCapture(VIDEO);
    video.size(550,418);
    video.position(420,240);

    canvas=createCanvas(550,550);
    canvas.position(1000,180);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized !');
}

function draw(){
    background('#FFFFFF');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }
}