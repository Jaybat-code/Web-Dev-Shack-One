

//gather timetext codes
const hourTxt = document.getElementById("Hour");
const minuteTxt = document.getElementById("Minute");
const SecondTxt = document.getElementById("Second");
const MilliTxt = document.getElementById("Milli");
//store texttimes in an array
const allTxt =[hourTxt,minuteTxt,SecondTxt,MilliTxt];
//interval of functionget time is every 5 milliseconds
setInterval(getTime,5);
//functioncall
getTime();

//main function
function getTime(){
    const currentDate = new Date();
    const hour=currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const milli = currentDate.getMilliseconds();
    const allTime=[hour,minute,second,milli];

    for(let i = 0;i<allTime.length;i++){
        allTxt[i].innerHTML=allTime[i];
    }
}
