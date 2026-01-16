
//Type 1 to add eventlistner (Optimal way)
function changeText(){
let fpara =  document.getElementById('fpara');
fpara.textContent = "hello mayuri"
}

let fpara =  document.getElementById('fpara');
fpara.addEventListener('click',changeText);
fpara.removeEventListener('click',changeText);


//Type 2 to add event lister(Not recommended Practies )

// let fpara =  document.getElementById('fpara');
// fpara.addEventListener('click',function changeText(){

// let fpara =  document.getElementById('fpara');
// fpara.textContent = "hello mayuri"
// });
