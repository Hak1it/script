document.querySelector('button').onclick = myClick

function myClick(){
var x =  document.querySelector('.h1').value;
var y = document.querySelector('.h2').value;
var nmanTexts = [];
var nman = '';



var x =  document.querySelector('.h1').value;
var y = document.querySelector('.h2').value;
var nmanTexts = [];
var nman = '';


for(let i=0;i<=x.length;i++){
   
    for(let j=0;j<y.length;j++){
       
       if(x[i]===y[j]){
        nman += x[i]
        i ++
       }
    };
    nmanTexts.push(nman) 
    nman = ""
    j = 0 
}


var longest = nmanTexts.sort(
    function (a, b) {
        return b.length - a.length;
    }
)

document.querySelector('.out').innerHTML = longest[0]
    console.log(longest[0]);

}





