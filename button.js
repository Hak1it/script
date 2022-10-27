myClick();document.querySelector('button').onclick = myClick

function myClick(){
var x =  document.querySelector('.h1').value;
var y = document.querySelector('.h2').value;
var mach = 0
var nmanText ="";
var longestMach = 0
var nman = ''


for(let i=0;i<=x.length;i++){
   
    for(let j=0;j<y.length;j++){
       mach=0  
        
    
       while(x[i+ mach]==y[j+mach]){ 
       
        nman+=x[i+mach];
 mach++;
     
    };

if(mach >longestMach){
    nmanText=''
     nmanText+=nman
    longestMach+=mach
}


}
if(longestMach==0){
document.querySelector('.out').innerHTML = nmanText 
console.log('nman chen')
}else{
    document.querySelector('.out').innerHTML = nmanText
    console.log(nmanText);}
}}


myClick();
