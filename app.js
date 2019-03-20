function showTime(){
    var date = moment();
    var h = date.get('hour');
    var m = date.get('minute');
    var s = date.get('second');




    document.getElementById("d-h").innerText = (h < 10) ? "0" + h : h;
    document.getElementById("d-m").innerText = (m < 10) ? "0" + m : m;
    document.getElementById("d-s").innerText = (s < 10) ? "0" + s : s;

    setTimeout(showTime, 1000);

}
showTime();
