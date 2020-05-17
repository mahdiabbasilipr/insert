$(function () {
    new WOW().init()
    $("#connect").click(1000,function () {
        if (document.getElementById("connect").style.left == '23%'){
            document.getElementById("connect").style.left = '-15px';
            document.getElementById("connect_info").style.left = '-25%';
        }else{
            document.getElementById("connect").style.left = '23%';
            document.getElementById("connect_info").style.left = '0%';
        }

    })
})

