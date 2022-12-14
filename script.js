
    function clock() {
        let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];
        let monthss=['January','Febrary','March','April','May','June','July','August','September','October','November','December'];
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var s = new Date().getSeconds();
        var p = document.getElementById("ampm");
        var yr=new Date().getFullYear();
        var dy=new Date().getDay();
        var mon=new Date().getMonth();
        var dt=new Date().getDate();
        
        document.getElementById('year').innerHTML=yr;
        document.getElementById('day').innerHTML=days[dy];
        document.getElementById('month').innerHTML=monthss[mon];
        
        
        
        if   (h > 12) {
            h = h - 12;
        }
        if (h >= 12) {
            p.innerHTML = "AM";
        } else {
            p.innerHTML = "PM";
        }
        h=h<10 ? "0"+h:h;
        s=s<10 ? "0"+s:s;
        dt=dt<10 ? "0"+dt:dt;
        m=m<10 ? "0"+m:m;
            document.getElementById('date').innerHTML=dt;
        document.getElementById("ghante").innerHTML = h;
        document.getElementById("min").innerHTML = m;
      document.getElementById("sec").innerHTML = s;
    }
        
    setInterval(clock, 1000);
  