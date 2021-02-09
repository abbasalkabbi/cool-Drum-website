
//this is onclick keyboard
window.addEventListener('keydown',(e)=>{
     var key= e.keyCode;//handle input key
     var audio=document.querySelector(`audio[ data-key="${key}"]`);
     audio.play();
     audio.currentTime=0;
     var style=document.querySelector(`div[ data-key="${key}"]`);
     style.classList.add('playing');
     
   
    this.setTimeout(()=>style.classList.remove('playing'),300)
    
}
)
//this is function onclick screen 
function key(onkey){
    var audio1=document.querySelector(`audio[ data-key="${onkey}"]`);
    audio1.play();
    audio1.currentTime=0;
    var style1=document.querySelector(`div[ data-key="${onkey}"]`);
     style1.classList.add('playing');
     
   
    this.setTimeout(()=>style1.classList.remove('playing'),300)
    
}