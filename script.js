const hoursEle = document.getElementById('hours')

const minutesEle = document.getElementById('minutes')

const secondsEle = document.getElementById('seconds')

function newTime(){
const date = new Date();

const hours = date.getHours()

const minutes = date.getMinutes()

const seconds = date.getSeconds()

hoursEle.textContent = fixTime(hours);

minutesEle.textContent = fixTime(minutes);

secondsEle.textContent = fixTime(seconds);
}
function fixTime(time){
    return time < 10 ? '0'+time : time
}
newTime();
setInterval(newTime, 1000)