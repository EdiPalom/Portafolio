var sound = new Howl({
    src: ['media/BlindShift.ogg'],
    html5:true
});

var gui_sound = new Howl({
    src:['media/gui_sound.mp3']
});

let objs = document.getElementsByClassName("bg_color");

function get_chunk(){
    return Math.floor(Math.random() * 255);
}

for(let i = 0; i < objs.length; i++)
{
//    let color = '#' + Math.floor(Math.random() * 16777215).toString(16) + '66';
//    let color = 'rgba('+get_chunk() +','+ get_chunk() +','+get_chunk()+',0.4)';
    //    objs[i].style.backgroundColor = color;
    objs[i].addEventListener("mouseenter",()=>{
        gui_sound.play();
    });
}

let video = document.getElementById("space_video");

function play_video()
{
    video.style.cursor = 'none';
    video.play();
    document.getElementById("btn_play").style.visibility = "collapse";
}

function pause_play()
{
    video.pause();
    show_play(); 
}

function show_play()
{
    video.style.cursor = 'auto';
    document.getElementById("btn_play").style.visibility = "visible";
    sound.stop();
}

function open_github()
{
    window.open("https://github.com/EdiPalom");
}
