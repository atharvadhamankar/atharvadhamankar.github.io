function randompic() {
var toss= Math.floor(Math.random() * 10) + 1;
if (toss <6){
document.getElementsByClassName("web_image")[0].innerHTML = '<img class="web_image_actual" src="../images/other/sakura1.png" />';
}
else{
document.getElementsByClassName("web_image")[0].innerHTML = '<img class="web_image_actual" src="../images/other/sakura2.png" />';
}
document.getElementsByClassName("web_image")[1].innerHTML = '<i style="font-size: 22px;">The beauty of simplicity</i>'
}