document.querySelector('button').onclick = myClick

function myClick(){
var x =  document.querySelector('.h1').value;
var y = document.querySelector('.h2').value;
var mach = 0;
var nmanText =" ";

for(let i=0;i<=x.length;i++)
{
    for(let j=0;j<y.length;j++){
    
       if(x[i]==y[j]){ 
        
        nmanText=nmanText+x[i];
        mach++;
    }
}
 
} if(mach == 0){
    document.querySelector('.out').innerHTML = ('Nman chen')
    console.log('Nman chen');
} else {
    document.querySelector('.out').innerHTML = nmanText
    console.log(nmanText);
}
}
myClick();