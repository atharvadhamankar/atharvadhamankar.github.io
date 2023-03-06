var tochange = document.getElementsByTagName('body');
var counter= 1
var headerel= document.getElementById("image_mask");

var pathh= "/backgrounds/ghibli/ghiblifull/ghibli ("
var exttt= ").jpg"
document.getElementById('slideRight').onclick = function () {
    counter= counter+1
    let finpath= pathh+ String(counter)+exttt
    urlstart= 'url("'
    urlend= '")'
    finpath= urlstart+finpath
    finpath=finpath+urlend
    document.body.style.backgroundImage =finpath
    document.getElementsByClassName("counter_holder")[0].innerHTML= String(counter)
    headerel.style.backgroundImage =finpath
    console.log(finpath)

};

document.getElementById('slideLeft').onclick = function () {
    counter= counter-1
    let finpath= pathh+ String(counter)+exttt
    urlstart= 'url("'
    urlend= '")'
    finpath= urlstart+finpath
    finpath=finpath+urlend
    document.body.style.backgroundImage =finpath
    document.getElementsByClassName("counter_holder")[0].innerHTML= String(counter)
    headerel.style.backgroundImage =finpath
    console.log(finpath)
    };


    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39) {
            counter= counter+1
            let finpath= pathh+ String(counter)+exttt
            urlstart= 'url("'
            urlend= '")'
            finpath= urlstart+finpath
            finpath=finpath+urlend
            document.body.style.backgroundImage =finpath
            document.getElementsByClassName("counter_holder")[0].innerHTML= String(counter)
            headerel.style.backgroundImage =finpath
            console.log(finpath)
        }
        else if(event.keyCode == 37) {
            counter= counter-1
            let finpath= pathh+ String(counter)+exttt
            urlstart= 'url("'
            urlend= '")'
            finpath= urlstart+finpath
            finpath=finpath+urlend
            document.body.style.backgroundImage =finpath
            document.getElementsByClassName("counter_holder")[0].innerHTML= String(counter)
            headerel.style.backgroundImage =finpath
            console.log(finpath)
        }
    });