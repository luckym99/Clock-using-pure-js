

setInterval(()=>{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var hHandDeg = 30*h + m/2 + s/120;
    var mHandDeg = 6*m+s/10;
    var sHandDeg = 6*s;
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    hours.style.transform = `rotate(${hHandDeg}deg)`
    minutes.style.transform = `rotate(${mHandDeg}deg)`
    seconds.style.transform = `rotate(${sHandDeg}deg)`
    console.log(hHandDeg);
},1000);