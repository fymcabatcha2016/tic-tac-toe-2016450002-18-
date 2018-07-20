var player=true;
var a=["","","","","","","","","",""];
var score=[0,0];
function move(cellNo){
var element=document.getElementById('cell'+cellNo);
if(element.innerHTML===""){
    a[cellNo]=(player)?"x":"o";
    element.innerHTML=(player)?"<span id='write"+cellNo+"' class='marker'>x</span>":"<span  id='write"+cellNo+"' class='marker'>o</span>";    
    if(check((player)?"x":"o")){
    }
    else
    player=!player;
}
else{
    alert("player has already played there");
}
}

function check(marker){
    console.log(a,marker,( a[1]===marker && a[2]===marker && a[3]===marker) );
    if(( a[1]===marker && a[2]===marker && a[3]===marker) ||
        (a[4]===marker && a[5]===marker && a[6]===marker) ||
       ( a[7]===marker && a[8]===marker && a[9]===marker) ||
       ( a[1]===marker && a[5]===marker && a[9]===marker) ||
       ( a[3]===marker && a[5]===marker && a[7]===marker)||
       ( a[1]===marker && a[4]===marker && a[7]===marker)||
       ( a[2]===marker && a[5]===marker && a[8]===marker)||
       ( a[3]===marker && a[6]===marker && a[9]===marker)
    ){
        alert("Player "+((player)?"1":"2")+" wins");
        if(player){
            score[0]++;
            document.getElementById('player1score').innerHTML=(""+score[0]);
        }
        else{
            score[1]++;
            document.getElementById('player2score').innerHTML=(""+score[1]);
        }
        reset();
        return true;
    }
    return false;
}
function reset(){
    for(var i=1;i<10;i++){
        document.getElementById('cell'+i).innerHTML="";
        a[i]="";
    }
}
function resetBoard(){
    score[0]=0;
    score[1]=0;
    document.getElementById('player1score').innerHTML=0;
    document.getElementById('player2score').innerHTML=0;
}