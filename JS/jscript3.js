const hrs=document.querySelector('.hour');
const min=document.querySelector('.minute');
const sec=document.querySelector('.second');
function runclock(){
var date=new Date();
var h=date.getHours()/12;
var m=date.getMinutes()/60;
var s=date.getSeconds()/60;
hrs.style.setProperty('--rotation',h*360);
min.style.setProperty('--rotation',m*360);
sec.style.setProperty('--rotation',s*360);
}
setInterval(runclock,1000);
runclock();