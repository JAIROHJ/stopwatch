const pomoTime = {};
var paused =true;
var minutes;        
var timerDate;
var remainingTime = 0;

const audio = new Audio();

audio.src = '../audio/sound_trim.mp3';


const setPomoTime = (minutes)=>{
    paused = true;
    audio.play();

    pomoTime.minutes = minutes;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = '00';
    minutes = pomoTime.minutes
    timerDate = new Date(new Date().getTime()+minutes*60000);
    remainingTime = 0;
    paused = true;

    document.getElementById('timer-control').innerHTML = 'play'
    document.getElementById('counter-background').classList.remove('inactive');
    document.getElementById('counter-background').classList.add('active');
}

const reset=()=>{
    audio.play();
    if(pomoTime.minutes==30){
        setPomoTime(30);
    }
    else if(pomoTime.minutes==45){
        setPomoTime(45);
    }
    else{
        setPomoTime(60);
    }
}

const startPomoCounter = (action)=>{
    audio.play();
    paused = !paused;

    document.getElementById('timer-control').innerHTML = paused ? 'Play' :'Pause'

    if(!paused){
        document.getElementById('counter-background').classList.remove('active');
        document.getElementById('counter-background').classList.add('inactive');
        document.getElementById('fofus').classList.remove('hidden');
    }
    else{
        document.getElementById('counter-background').classList.remove('inactive');
        document.getElementById('counter-background').classList.add('active');
    }
    const updateTimer = ()=>{
        if(!paused){
            const date = new Date().getTime() - remainingTime;
            const timeLeft = timerDate -date
            document.getElementById('minutes').innerHTML = Math.floor((timeLeft % (1000*60*60))/(1000*60))
            document.getElementById('seconds').innerHTML = Math.floor((timeLeft % (1000*60)) /1000);
        }
        else{
            remainingTime += 300;
        }
    }
    setInterval(updateTimer,1000);
}
setPomoTime(30);