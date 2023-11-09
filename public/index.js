let video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(async(stream) => {
    video.srcObject = await stream;
})

function micClose(){
    if(video.muted == true){
        video.muted = false;
    } else{
        video.muted = true;
    }
}