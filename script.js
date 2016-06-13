$(function(){
    // var pj=GetQueryString("pj");
    
    $("#pagejumper").load("pagejumper.html",function(){ 
        $("#pagejumper").find("li").eq(pj).addClass("active");
    }).hover(function(){
        $(this).animate({"left":"0"},300);
    },function(){
        $(this).animate({"left":"-190px"},300);
    });

    var $bn=$("#menu");
    $bn.find("a[data-toggle]").click(function(){
        $("body").scrollTop(0);
        $bn.find("li.active").removeClass();
    });

        var istop =true, timer, st, ispeed;
    window.onscroll = function(){
        if(!istop) clearInterval(timer);
        istop=false;
    }

    $("#gotop").click(function(){
        timer = setInterval(function(){ 
            st = $(window).scrollTop();
            ispeed = Math.floor(st/1.3);
            $(window).scrollTop(st-(st-ispeed));
            istop=true;
            if(st==0) clearInterval(timer);
        },30);
    });

    function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
    };
})

  