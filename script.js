let goingBack = true;
function myFunction(){
  if(goingBack){
    window.history.back();
    document.getElementById("demo").innerHTML="going back"
 }else{
    document.getElementById("demo").innerHTML="it's getting better"
 }
  goingBack= !goingBack;
}