window.addEventListener('load',init)
function init(){
    document.getElementById('foszereplo').addEventListener('click',jelenit)
}
function jelenit(){
    var img=document.getElementById("kep");
         if(img.style.display==="none"){
            document.getElementById("kep").style.display='block';
         }        
         else{
            img.style.display="none";
         }   
}