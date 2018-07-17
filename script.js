var player=true;
function move(event){
var element=document.getElementById('cell'+event);
if(element.innerHTML===""){
    element.innerHTML=(player)?"<span class='marker'>x</span>":"<span class='marker'>o</span>";
    player=!player;
}
else{
    alert("player has already played there");
}
}
function reset(){
    for(var i=1;i<10;i++){
        document.getElementById('cell'+i).innerHTML="";
    }
}