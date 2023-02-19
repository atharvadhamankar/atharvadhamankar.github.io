var tochange = document.getElementsByTagName('body');
var counter= 1

var pathh= "/backgrounds/ghibli/maybe/tot/ghibli ("
var exttt= ").jpg"
document.getElementById('slideRight').onclick = function () {
    counter= counter+1
    let finpath= pathh+ String(counter)+exttt
    urlstart= 'url("'
    urlend= '")'
    finpath= urlstart+finpath
    finpath=finpath+urlend
    document.body.style.backgroundImage =finpath
    document.getElementsByClassName("my-photo")[0].innerHTML= String(counter)
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
    document.getElementsByClassName("my-photo")[0].innerHTML= String(counter)
    console.log(finpath)
    };