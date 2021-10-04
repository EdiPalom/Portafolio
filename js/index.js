


var sound = new Howl({
    src: ['media/BlindShift.ogg'],
    html5:true
});

var gui_sound = new Howl({
    src:['media/gui_sound.mp3']
});

let objs = document.getElementsByClassName("bg_color");
let btn_play = document.getElementById("btn_play");
let video = document.getElementById("space_video");

(()=>{

    if(window.navigator.userAgent.toLowerCase().indexOf("chrome") > 0)
    {
        btn_play.innerHTML = '';
        space_video.controls = true;
    }
    
    btn_play.addEventListener("mouseover",()=>{
        btn_play.style.cursor="pointer";
    });

    btn_play.addEventListener("click",()=>{
        play_video();
    });

    space_video.addEventListener("pause",()=>{
        sound.pause();
    });
})();

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

function play_video()
{
    video.style.cursor = 'none';
    video.play();
    btn_play.style.visibility = "collapse";
}

function pause_play()
{
    video.pause();
    show_play(); 
}

function show_play()
{
    video.style.cursor = 'auto';
    btn_play.style.visibility = "visible";
    sound.stop();
}

function open_github()
{
    window.open("https://github.com/EdiPalom");
}
